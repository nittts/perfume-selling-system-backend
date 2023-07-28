import { Request, Response } from "express";
import usersModel from "../../Models/users/__index";

const model = new usersModel();

const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  const response = await model.update(body, id);

  return res.status(200).send(response);
};

export default updateUserController;
