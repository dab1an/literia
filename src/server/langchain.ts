import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";
import { TranslationFeedbackBody } from "~/schemas/translationSchemas";

const TEMPLATE = `Your job is to help people improve at language. Given a sentence in {original_lang} and a sentence in {translated_lang}, you will check
whether the translation is correct, and give feedback if applicable. 

original sentence: {original_sentence}
user's translated sentence: {translated_sentence}`;

const model = new ChatOpenAI({
  temperature: 0.8,
  modelName: "gpt-3.5-turbo",
});

const schema = z.object({
  success: z.boolean().describe("Whether the translation was correct"),
  topics: z
    .enum(["vocabulary", "punctuation", "spelling", "tense", "grammar"])
    .describe("Array giving the topics the user made mistakes on"),
  feedback: z.string()
    .describe(`advice on what aspect of translation to improve. You should be strict, if the user makes a slight (spelling, vocabulary) mistake you
    can still count it as correct, but give feedback on how to make it perfect.`),
});

const functionCallingModel = model.bind({
  functions: [
    {
      name: "output_formatter",
      description: "Should always be used to properly format output",
      parameters: zodToJsonSchema(schema),
    },
  ],
  function_call: { name: "output_formatter" },
});

const prompt = PromptTemplate.fromTemplate(TEMPLATE);

export const getTranslationFeedback = async (
  params: TranslationFeedbackBody,
) => {
  const chain = prompt
    .pipe(functionCallingModel)
    .pipe(new JsonOutputFunctionsParser());

  const result = await chain.invoke(params);

  return result;
};

// Route: POST /api/ai/translationFeedback
// {
//     "original_lang": "Spanish",
//     "translated_lang": "English",
//     "original_sentence": "¿Que color es este?",
//     "translated_sentence": "What color is that?"
//}
