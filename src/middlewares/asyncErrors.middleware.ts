import { NextFunction, Request, Response } from "express";
import LoggerService from "../utils/logger";

class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const errorHandling = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { baseUrl } = req;
  const logger = new LoggerService(baseUrl);

  if (err instanceof AppError) {
    logger.errorObj(err.message, { success: true, code: err.statusCode });

    return res.status(err.statusCode).json({ message: err.message, success: false });
  }

  logger.errorObj(err.message, { message: "Internal server error", success: false });

  res.status(500).json({ message: "Internal server error", success: false });
};

export { AppError, errorHandling };
