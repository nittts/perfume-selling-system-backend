import { IUser, IUserCreate } from "../../@types/users";
import { mongoDatabase } from "../../database/atlas.mongo";
import { v4 as uuid } from "uuid";

const collection = mongoDatabase.collection("users");

const createClientService = async (userCreate: IUserCreate) => {
  const newUser = {
    ...userCreate,
    id: uuid(),
    items: [],
    accPaid: 0,
    accNotPaid: 0,
    online: false,
    active: "A",
  } as IUser;

  const res = await collection.insertOne(newUser);

  return { success: true, data: res };
};

export default createClientService;
