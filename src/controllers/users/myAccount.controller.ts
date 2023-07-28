import { Request, Response } from "express";
import usersModel from "../../Models/users/__index";

const model = new usersModel();

const myAccountController = async (req: Request, res: Response) => {
  const { id } = req.user;

  const response = await model.myAccount(id);

  return res.status(200).send(response);
};

export default myAccountController;
