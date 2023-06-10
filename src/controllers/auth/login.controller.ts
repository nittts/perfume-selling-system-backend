import { Request, Response } from "express";
import authModel from "../../Models/auth";

const auth = new authModel();

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const response = await auth.login(email, password);

  return res.status(200).send(response);
};

export default loginController;
