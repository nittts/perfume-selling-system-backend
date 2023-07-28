import { NextFunction, Request, Response } from "express";
import { AppError } from "./asyncErrors.middleware";
import LoggerService from "../utils/logger";

interface IDetails {
  message: string;
}

const validateSchema = (schema: any, property: "body" | "params" | "query") => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req[property];

      const results = schema.validate(data);

      const valid = !results.error;

      if (valid) {
        req.body = results.value;
        next();
      } else {
        let message = "";
        if (results.error && results.error.details) {
          const { details } = results.error.details;

          if (details) {
            message = details.map(({ message }: IDetails) => message).join(", ");
          } else {
            message = results.error.message;
          }
        }

        throw new AppError(message, 422);
      }
    } catch (err) {
      const { baseUrl } = req;
      const logger = new LoggerService(baseUrl);

      logger.errorObj("Validation Error", { err, statusCode: 422 });

      res.status(422).json({ success: false, error: err });
    }
  };
};

export default validateSchema;
