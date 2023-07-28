import { IUser, IUserCreate } from "../../@types/users";
import { mongoDatabase } from "../../database/atlas.mongo";
import { v4 as uuid } from "uuid";
import { AppError } from "../../middlewares/asyncErrors.middleware";

const collection = mongoDatabase.collection("users");

const createUserService = async (userCreate: IUserCreate) => {
  const newUser = {
    ...userCreate,
    id: uuid(),
    items: [],
    accPaid: 0,
    accNotPaid: 0,
    online: false,
    active: "A",
  } as IUser;

  const found = await collection.find({ "auth.email": userCreate.auth.email }).toArray();

  if (found.length > 0) {
    throw new AppError("usuário já existente.", 401);
  }

  const res = await collection.insertOne(newUser);

  return { success: true, data: res };
};

export default createUserService;
