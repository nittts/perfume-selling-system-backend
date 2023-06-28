import { Request, Response } from "express";
import authModel from "../../Models/auth/__index";

const auth = new authModel();

const oneTimePasswordController = async (req: Request, res: Response) => {
  const { email } = req.body;

  const response = await auth.oneTimePassword(email);

  return res.status(200).send(response);
};

export default oneTimePasswordController;
