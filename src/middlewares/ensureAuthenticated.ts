import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(404).end();
  }

  const token = authToken.replace("Bearer ", "");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET_TOKEN);

    req.user_id = String(sub);

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}
