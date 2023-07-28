import { Request, Response } from "express";
import authModel from "../../Models/auth/__index";
import { AppError } from "../../middlewares/asyncErrors.middleware";

const auth = new authModel();

const forgotPasswordController = async (req: Request, res: Response) => {
  const { email } = req.body;
  const { hostname, useragent } = req;

  const response = await auth.forgotPassword(email, hostname, useragent);

  return res.status(200).send(response);
};

export default forgotPasswordController;
