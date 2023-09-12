import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";
import { TranslationFeedbackBody } from "~/schemas/translationSchemas";
import { OriginalSentenceBody } from "~/schemas/sentenceSchemas";

const TEMPLATE = `Your job is to help people improve at language. Given a sentence in {original_lang} and a sentence in {translated_lang}, you will check
whether the translation is correct, and give feedback if applicable. 

original sentence: {original_sentence}
user's translated sentence: {translated_sentence}`;

const SENTENCE_TEMPLATE = `Generate a conversational sentence in {sentence_lang} for a user to translate into, only respond with the sentence and nothing else, not even quotes, and do not mention that you are giving a sentence. It is important that the sentence is at least 15 words or more long.`;

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

const sentenceSchema = z.object({
  original_sentence: z
    .string()
    .describe(`Sentence that is to be translated by the user`),
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

const sentenceFunctionCallingModel = model.bind({
  functions: [
    {
      name: "output_formatter",
      description: "Should always be used to properly format output",
      parameters: zodToJsonSchema(sentenceSchema),
    },
  ],
  function_call: { name: "output_formatter" },
});

const prompt = PromptTemplate.fromTemplate(TEMPLATE);

const prompt_sentence = PromptTemplate.fromTemplate(SENTENCE_TEMPLATE);

export const getTranslationFeedback = async (
  params: TranslationFeedbackBody,
) => {
  const chain = prompt
    .pipe(functionCallingModel)
    .pipe(new JsonOutputFunctionsParser());

  const result = await chain.invoke(params);

  return result;
};

export const getOriginalSentence = async (params: OriginalSentenceBody) => {
  const chain = prompt_sentence
    .pipe(sentenceFunctionCallingModel)
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
