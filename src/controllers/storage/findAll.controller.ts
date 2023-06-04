import { Request, Response } from "express";
import StorageModel from "../../Models/storage";

const storage = new StorageModel();

const findAllController = async (req: Request, res: Response) => {
  const filters: any = {};

  // Query params;
  const { query } = req;

  ["buyingValue", "resellValue", "name", "id", "category", "resellerProductId", "resellerId", "discount"].forEach(
    (filter: string) => {
      if (query[filter]) {
        filters[filter] = query[filter];
      }
    }
  );

  const response = await storage.findAll(filters);

  return res.status(200).json(response);
};

export default findAllController;
