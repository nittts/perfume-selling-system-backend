import { mongoDatabase } from "../../database/atlas.mongo";
import { AppError } from "../../middlewares/asyncErrors.middleware";

const collection = mongoDatabase.collection("users");

const myAccountService = async (id: string) => {
  const user = await collection.find({ id: id }).toArray();

  if (user.length === 0) {
    throw new AppError("Usuário não encontrado.", 404);
  }

  return { success: true, data: user[0] };
};

export default myAccountService;
