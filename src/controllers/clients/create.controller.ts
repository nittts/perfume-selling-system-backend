import { Request, Response } from "express";
import clientsModel from "../../Models/clients/__index";

const model = new clientsModel();

const createClientController = async (req: Request, res: Response) => {
  const { name, phone, permissions, type, auth } = req.body;

  const response = await model.create({ name, phone, permissions, type, auth });

  return res.status(201).send(response);
};

export default createClientController;
