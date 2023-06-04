import { Request, Response } from "express";
import StorageModel from "../../Models/storage";

const storage = new StorageModel();

const deleteController = async (req: Request, res: Response) => {
  const data = req.body;

  const response = storage.delete(data);

  return res.status(204).json(response);
};

export default deleteController;
