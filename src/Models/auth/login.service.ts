import jwt from "jsonwebtoken";
import { mongoDatabase } from "../../database/atlas.mongo";
import { AppError } from "../../middlewares/asyncErrors.middleware";
import { IUser } from "../../@types/users";

const collection = mongoDatabase.collection<IUser>("users");

const loginService = async (email: string, pwd: string) => {
  const user = (await collection.findOne({ "auth.email": email })) as IUser | unknown;

  if (!user) {
    throw new AppError("Usuário não encontrado.", 404);
  }

  const {
    id,
    auth: { password },
  } = user as IUser;

  if (password !== pwd) {
    throw new AppError("Senha inválida.", 403);
  }

  await collection.updateOne({ id }, { $set: { online: true } });

  const token = jwt.sign({ user }, String(process.env.SECRET_KEY), { expiresIn: "24h" });

  return { success: true, token };
};

export default loginService;
