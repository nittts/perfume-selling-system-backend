import StorageModel from "../../Models/storage/__index";
import { Request, Response } from "express";

const storage = new StorageModel();

const batchCreateController = async (req: Request, res: Response) => {
  const { products } = req.body;

  const response = await storage.batchCreate(products);

  return res.status(200).json(response);
};

export default batchCreateController;
