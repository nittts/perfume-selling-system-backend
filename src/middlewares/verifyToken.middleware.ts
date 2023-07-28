import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "./asyncErrors.middleware";
import LoggerService from "../utils/logger";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const { baseUrl } = req;
  const logger = new LoggerService(baseUrl);

  try {
    let token = req.headers.authorization as string;

    if (!token) {
      throw new AppError("Token de autenticação não providênciado.", 403);
    }

    token = token.split(" ")[1];

    jwt.verify(token, String(process.env.SECRET_KEY), (error: any, decoded: any) => {
      if (error) {
        logger.errorObj("JWT error", { success: false, message: "Token inválido." });

        return res.status(401).json({ success: false, message: "Token inválido." });
      }

      req.user = decoded.user;

      next();
    });
  } catch (err) {
    if (err instanceof AppError) {
      logger.errorObj("JWT error", { success: false, message: "Token inválido." });

      return res.status(403).send({ success: false, message: err.message });
    }
  }
};

export default verifyToken;
