import { LooseObject } from "../../@types";
import { mongoDatabase } from "../../database/atlas.mongo";
import { convertKeysToString } from "../../helpers/objectKeyStrings.helper";
import { AppError } from "../../middlewares/asyncErrors.middleware";

const collection = mongoDatabase.collection("users");

const updateMyAccountService = async (id: string, userData: LooseObject) => {
  const found = await collection.find({ id: id }).toArray();

  if (found.length === 0) {
    throw new AppError("Usuário não encontrado.", 404);
  }

  const updateData = convertKeysToString(userData, "", {});

  const res = await collection.updateOne({ id: id }, { $set: updateData });

  return { success: true, data: res };
};

export default updateMyAccountService;
