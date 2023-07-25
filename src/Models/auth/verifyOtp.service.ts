import { IUser } from "../../@types/users";
import { mongoDatabase } from "../../database/atlas.mongo";
import planetScalePrisma from "../../database/planetScale.mysql";
import { AppError } from "../../middlewares/asyncErrors.middleware";
import moment from "moment-timezone";
import loginService from "./login.service";

const collection = mongoDatabase.collection("users");
const otpTokens = planetScalePrisma.otp_tokens;

const verifyOtpService = async (receivedOtp: number, email: string) => {
  const user = (await collection.findOne({ "auth.email": email })) as IUser | unknown;

  if (!user) {
    throw new AppError("Usuário não encontrado.", 404);
  }

  const { id, auth } = user as IUser;

  const foundOtp = await otpTokens.findFirst({ where: { AND: [{ user_id: id }, { otp: receivedOtp }] } });
  if (!foundOtp) {
    throw new AppError("Registro de entrada única não encontrado.", 404);
  }

  const { createAt, otp } = foundOtp;

  const validDate = moment(new Date()).subtract(10, "minutes");

  if (!moment(createAt).isAfter(validDate)) {
    throw new AppError("Senha de entrada única expirado.", 401);
  }

  await otpTokens.delete({ where: { otp: otp } });

  const loggedIn = await loginService(auth.email, auth.password);

  return loggedIn;
};

export default verifyOtpService;
