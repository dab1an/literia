import { NextApiRequest, NextApiResponse } from "next";
import { getTranslationFeedback } from "src/server/langchain";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method not allowed, please use POST" });
  }

  const result = await getTranslationFeedback();
  return res.status(200).json(result);
};
