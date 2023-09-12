import { type } from "os";
import { z } from "zod";

export const translationFeedbackBody = z.object({
  original_lang: z.string(),
  translated_lang: z.string(),
  original_sentence: z.string(),
  translated_sentence: z.string(),
});

export type TranslationFeedbackBody = z.infer<typeof translationFeedbackBody>;
