import { Request, Response } from "express";
import usersModel from "../../Models/users/__index";

const model = new usersModel();

const updateMyAccountController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const { body } = req;

  const response = await model.updateMyAccount(id, body);

  return res.status(200).send(response);
};

export default updateMyAccountController;
