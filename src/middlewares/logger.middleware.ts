import { Request, Response, NextFunction } from "express";
import LoggerService from "../utils/logger";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { baseUrl, path } = req;
  // Create logger with the route name
  const logger = new LoggerService(`${baseUrl}${path}`);

  // Adding body of the request as log data
  const { body } = req;

  logger.setLogData(body);
  logger.infoObj(`Request recieved at ${baseUrl}`, body);

  next();
};

export default loggerMiddleware;
