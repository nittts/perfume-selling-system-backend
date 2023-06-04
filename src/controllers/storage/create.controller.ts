import { Request, Response } from "express";
import StorageModel from "../../Models/storage";

const storage = new StorageModel();

const createController = async (req: Request, res: Response) => {
  const data = req.body;

  const response = await storage.create(data);

  return res.status(201).json(response);
};

export default createController;
