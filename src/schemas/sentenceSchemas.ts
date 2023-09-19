import { type } from "os";
import { z } from "zod";

export const originalSentenceBody = z.object({
  sentence_lang: z.string(),
});

export type OriginalSentenceBody = z.infer<typeof originalSentenceBody>;
