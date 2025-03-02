import { Response, Request } from "express";
import { verifyJWT } from "../jwt";

export const profile = (req: Request, res: Response) => {
  const { token } = req.cookies;
  if (token) {
    res.json(verifyJWT(token));
  } else {
    res.json(null);
  }
  res.json(token);
};
