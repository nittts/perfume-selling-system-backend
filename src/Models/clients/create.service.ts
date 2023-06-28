import { IUser, IUserCreate } from "../../@types/users";
import { mongoDatabase } from "../../database/atlas.mongo";
import { v4 as uuid } from "uuid";
import { encrypt } from "../../helpers/encryption.helper";
import { AppError } from "../../middlewares/asyncErrors.middleware";

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

  const found = collection.find({ "auth.email": userCreate.auth.email });

  if (found) {
    throw new AppError("usuário já existente.", 401);
  }

  const res = await collection.insertOne(newUser);

  return encrypt(JSON.stringify({ data: { success: true, data: res } }));
};

export default createClientService;
