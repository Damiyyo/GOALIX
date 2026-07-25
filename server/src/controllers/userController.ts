import { Request, Response } from "express";

export const getProfile = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Protected profile route accessed",
  });
};

