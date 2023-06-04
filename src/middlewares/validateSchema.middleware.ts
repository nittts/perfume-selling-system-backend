import { NextFunction, Request, Response } from "express";
import { AppError } from "./asyncErrors.middleware";

interface IDetails {
  message: string;
}

const validateSchema = (schema: any, property: "body" | "params" | "query") => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property];

    const results = schema.validate(data);

    const valid = !results.error;

    if (valid) {
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

      console.error("Validation Error", message);
      res.status(422).json({ success: false, error: message });
      throw new AppError(message, 422);
    }
  };
};

export default validateSchema;
