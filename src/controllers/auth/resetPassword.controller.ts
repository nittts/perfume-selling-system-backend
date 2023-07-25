import { Request, Response } from "express";
import authModel from "../../Models/auth/__index";
import { AppError } from "../../middlewares/asyncErrors.middleware";
import LoggerService from "../../utils/logger";

const auth = new authModel();

const resetPasswordController = async (req: Request, res: Response) => {
  const { token, newPassword } = req.body;

  const response = await auth.resetPassword(newPassword, token);

  return res.status(200).send(response);
};

export default resetPasswordController;
