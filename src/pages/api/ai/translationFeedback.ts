import { NextApiRequest, NextApiResponse } from "next";
import { getTranslationFeedback } from "src/server/langchain";
import { z } from "zod";
import { translationFeedbackBody } from "~/schemas/translationSchemas";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method not allowed, please use POST" });
  }

  try {
    let body = translationFeedbackBody.parse(req.body);

    const result = await getTranslationFeedback(body);
    return res.status(200).json(result);
  } catch (e) {
    if (e instanceof z.ZodError) {
      return res.status(400).json({ error: "Bad request", details: e.errors });
    }

    return res.status(500).json({ error: "Internal server error", details: e });
  }
};
