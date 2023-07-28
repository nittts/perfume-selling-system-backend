import { LooseObject } from "../../@types";
import { mongoDatabase } from "../../database/atlas.mongo";

const collection = mongoDatabase.collection("users");

const findAllService = async (filters: LooseObject) => {
  const res = await collection.find(filters).toArray();

  return { success: true, data: res };
};

export default findAllService;
