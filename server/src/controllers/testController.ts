import { Request, Response } from "express";

export const testAPI = (req: Request, res: Response) => {
  res.json({
    message: "GOALIX API is working",
  });
};