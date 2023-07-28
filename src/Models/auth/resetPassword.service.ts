import { IUser } from "../../@types/users";
import { mongoDatabase } from "../../database/atlas.mongo";
import planetScalePrisma from "../../database/planetScale.mysql";
import { AppError } from "../../middlewares/asyncErrors.middleware";
import moment from "moment-timezone";

interface IResetPassword {
  user_id: string;
  createAt: Date;
  token: string;
}

const collection = mongoDatabase.collection("users");
const { resetPassword_entries } = planetScalePrisma;

const resetPasswordService = async (newPwd: string, token: string) => {
  const resetEntry = (await resetPassword_entries.findFirst({ where: { token: token } })) as IResetPassword | unknown;

  if (!resetEntry) {
    throw new AppError("Requisição de troca de senha não encontrado.", 404);
  }

  const { user_id, createAt } = resetEntry as IResetPassword;

  const validDate = moment(new Date()).subtract(1, "day");
  if (!moment(createAt).isAfter(validDate)) {
    throw new AppError("Requsição expirada única expirado.", 401);
  }

  await resetPassword_entries.delete({ where: { token: token } });

  await collection.updateOne({ id: user_id }, { $set: { "auth.password": newPwd } });

  return { success: true, message: "Senha atualizada com sucesso!" };
};

export default resetPasswordService;
