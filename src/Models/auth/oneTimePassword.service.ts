import generateOtp from "../../helpers/otpGenerator.helper";
import { mongoDatabase } from "../../database/atlas.mongo";
import { sendEmail } from "../../helpers/mail.helper";
import { AppError } from "../../middlewares/asyncErrors.middleware";
import { v4 as uuid } from "uuid";
import { IUser } from "../../@types/users";
import planetScalePrisma from "../../database/planetScale.mysql";

const collection = mongoDatabase.collection("users");
const { otp_tokens } = planetScalePrisma;

const oneTimePasswordService = async (email: string) => {
  const otp = generateOtp(6);

  const user = (await collection.findOne({ "auth.email": email })) as IUser | unknown;

  if (!user) {
    throw new AppError("Usuário não encontrado.", 404);
  }

  const { name, id } = user as IUser;

  const baseEntry = {
    user_id: id,
    otp: otp,
    createAt: new Date(),
  };

  await otp_tokens.upsert({
    where: { user_id: id },
    update: { otp: otp, createAt: new Date() },
    create: baseEntry,
  });

  const res = await sendEmail({
    to: email,
    secure: true,
    subject: "Pedido de entrada com senha única",
    templateData: {
      name: "William Baierle Charqueiro",
      otp: otp,
    },
    templateName: "otp",
  });

  return res;
};

export default oneTimePasswordService;
