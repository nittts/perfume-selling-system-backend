import { Request, Response } from "express";
import authModel from "../../Models/auth/__index";
import LoggerService from "../../utils/logger";
import { AppError } from "../../middlewares/asyncErrors.middleware";

const auth = new authModel();

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const response = await auth.login(email, password);

    return res.status(200).send(response);
  } catch (err) {
    const logger = new LoggerService(req.baseUrl);

    if (err instanceof AppError) {
      logger.errorObj(err.message, { success: false, err });
      return res.status(err.statusCode).send(err);
    }
  }
};

export default loginController;
