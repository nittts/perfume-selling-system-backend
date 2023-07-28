import { IUser } from "../../@types/users";
import { mongoDatabase } from "../../database/atlas.mongo";
import { sendEmail } from "../../helpers/mail.helper";
import { v4 as uuid } from "uuid";
import { AppError } from "../../middlewares/asyncErrors.middleware";

import { Details } from "express-useragent";
import planetScalePrisma from "../../database/planetScale.mysql";

const collection = mongoDatabase.collection<IUser>("users");
const { resetPassword_entries } = planetScalePrisma;

const forgotPasswordService = async (email: string, hostname: string, userAgent: Details | undefined) => {
  const token = uuid();
  const user = (await collection.findOne({ "auth.email": email })) as IUser | unknown;

  if (!user) {
    throw new AppError("Usuário não encontrado.", 404);
  }

  const { name, id } = user as IUser;

  const baseEntry = {
    user_id: id,
    token: uuid(),
    createAt: new Date(),
  };

  await resetPassword_entries.upsert({
    where: { user_id: id },
    update: { token: uuid(), createAt: new Date() },
    create: baseEntry,
  });

  const res = await sendEmail({
    to: email,
    secure: true,
    subject: "Recuperação de Senha",
    templateName: "forgotPassword",
    templateData: {
      name: name,
      action_url: `https://${hostname}/resetPassword?token=${token}`,
      operating_system: userAgent?.os,
      browser_name: `${userAgent?.browser}, ${userAgent?.version}`,
      support_url: "https://wa.me/555197812401",
    },
  });

  return res;
};

export default forgotPasswordService;
