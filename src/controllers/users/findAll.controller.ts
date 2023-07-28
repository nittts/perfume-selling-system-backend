import { Request, Response } from "express";
import usersModel from "../../Models/users/__index";
import { LooseObject } from "../../@types";
import { parseBool } from "../../helpers/parsers.helper";

const model = new usersModel();

const findAllController = async (req: Request, res: Response) => {
  const { query } = req;

  const { permissions, online, name, id, email, phone, type } = query;

  const filters: LooseObject = {};

  if (name) {
    filters.name = { $regex: name };
  }
  if (id) {
    filters.id = id;
  }
  if (permissions) {
    filters.permissions = { $all: (permissions as Array<string>).map((perm: string) => Number(perm)) };
  }
  if (type) {
    filters.type = type;
  }
  if (email) {
    filters["auth.email"] = { $regex: email };
  }
  if (online) {
    filters.online = parseBool(online as unknown | string);
  }
  if (phone) {
    filters.phone = { $regex: phone };
  }

  const response = await model.findAll(filters);

  return res.status(200).send(response);
};

export default findAllController;
