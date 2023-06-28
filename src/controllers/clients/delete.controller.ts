import deleteUserService from "../../Models/clients/delete.service";
import { Request, Response } from "express";

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const response = await deleteUserService(id);

  return res.status(200).send(response);
};

export default deleteUserController;
