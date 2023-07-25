import { Request, Response } from "express";
import StorageModel from "../../Models/storage/__index";

const storage = new StorageModel();

const editController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const response = await storage.edit(data, id);

  return res.status(200).json(response);
};

export default editController;
