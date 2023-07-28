import { Request, Response } from "express";
import usersModel from "../../Models/users/__index";

const model = new usersModel();

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const response = await model.delete(id);

  return res.status(200).send(response);
};

export default deleteUserController;
