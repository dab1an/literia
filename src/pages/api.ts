import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const userInput = req.body.userInput;

    const translation = `${userInput}`;

    return res.status(200).json({ translation });
  }
};
