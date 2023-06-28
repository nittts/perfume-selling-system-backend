import { mongoDatabase } from "../../database/atlas.mongo";

const collection = mongoDatabase.collection("users");

const logoutService = async (id: string) => {
  await collection.updateOne({ id }, { $set: { online: false } });

  return { success: true, data: "Desconectado com sucesso." };
};

export default logoutService;
