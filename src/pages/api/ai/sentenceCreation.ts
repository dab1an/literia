import { NextApiRequest, NextApiResponse } from "next";
import { getOriginalSentence } from "src/server/langchain";
import { z } from "zod";
import { originalSentenceBody } from "~/schemas/sentenceSchemas";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method not allowed, please use POST" });
  }

  try {
    let body = originalSentenceBody.parse(req.body);

    const result = await getOriginalSentence(body);
    return res.status(200).json(result);
  } catch (e) {
    if (e instanceof z.ZodError) {
      return res.status(400).json({ error: "Bad request", details: e.errors });
    }

    return res.status(500).json({ error: "Internal server error", details: e });
  }
};
