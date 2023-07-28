import { Request, Response } from "express";
import usersModel from "../../Models/users/__index";

const model = new usersModel();

const createUserController = async (req: Request, res: Response) => {
  const { name, phone, permissions, type, auth } = req.body;

  const response = await model.create({ name, phone, permissions, type, auth });

  return res.status(201).send(response);
};

export default createUserController;
