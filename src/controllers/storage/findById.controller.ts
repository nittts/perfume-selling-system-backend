import { Request, Response } from "express";
import StorageModel from "../../Models/storage/__index";

const storage = new StorageModel();

const findByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const response = await storage.findById(id);

  return res.status(200).json(response);
};

export default findByIdController;
