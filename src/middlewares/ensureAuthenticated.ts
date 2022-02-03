import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: "Token is missing" });
  }

  const [_, token] = authToken.split(" ");

  try {
    verify(token, "53cadaf3-691e-45c8-9873-bed5f239f189");

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
}
