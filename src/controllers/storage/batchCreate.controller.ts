import StorageModel from "../../Models/storage";
import { Request, Response } from "express";

const storage = new StorageModel();

const batchCreateController = async (req: Request, res: Response) => {
  const files = req.body;

  const response = await storage.batchCreate(files);

  return res.status(200).json(response);
};

export default batchCreateController;
