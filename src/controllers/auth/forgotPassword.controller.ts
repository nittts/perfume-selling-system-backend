import { Request, Response } from "express";
import authModel from "../../Models/auth";

const auth = new authModel();

const forgotPasswordController = async (req: Request, res: Response) => {
  const { email } = req.body;

  const response = await auth.forgotPassword(email);

  return res.status(200).send(response);
};

export default forgotPasswordController;
