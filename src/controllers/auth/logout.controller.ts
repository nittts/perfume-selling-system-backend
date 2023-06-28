import { Request, Response } from "express";
import authModel from "../../Models/auth/__index";

const auth = new authModel();

const logoutController = async (req: Request, res: Response) => {
  const { id } = req.user;

  const response = await auth.logout(id);

  return res.status(201).send(response);
};

export default logoutController;
