import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "./asyncErrors.middleware";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization as string;

    if (!token) {
      throw new AppError("Token de autenticação não providênciado.", 403);
    }

    jwt.verify(token, String(process.env.SECRET_KEY), (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({ success: false, message: "Token inválido." });
      }

      req.user = decoded.user;

      next();
    });
  } catch (err) {
    if (err instanceof AppError) {
      return res.status(403).send({ success: false, message: err.message });
    }
  }
};

export default verifyToken;
