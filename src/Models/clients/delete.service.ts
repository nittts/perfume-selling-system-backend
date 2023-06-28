import { mongoDatabase } from "../../database/atlas.mongo";
import { encrypt } from "../../helpers/encryption.helper";
import { AppError } from "../../middlewares/asyncErrors.middleware";

const collection = mongoDatabase.collection("users");

const deleteUserService = async (id: string) => {
  const res = await collection.updateOne({ id: id }, { active: "I" });

  return encrypt(JSON.stringify({ data: { success: true, data: res } }));
};

export default deleteUserService;
