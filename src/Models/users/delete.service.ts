import { mongoDatabase } from "../../database/atlas.mongo";
import { AppError } from "../../middlewares/asyncErrors.middleware";

const collection = mongoDatabase.collection("users");

const deleteUserService = async (id: string) => {
  const found = await collection.find({ id: id }).toArray();

  if (found.length === 0) {
    throw new AppError("usuário não existente.", 404);
  }

  const res = await collection.deleteOne({ id: id });

  return { success: true, data: res };
};

export default deleteUserService;
