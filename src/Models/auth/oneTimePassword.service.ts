import generateOtp from "../../helpers/otpGenerator.helper";
import { mongoDatabase } from "../../database/atlas.mongo";
import { sendEmail } from "../../helpers/mail.helper";

const collection = mongoDatabase.collection("users");

const oneTimePasswordService = async (email: string) => {
  const otp = generateOtp(6);

  await collection.updateOne({ email }, { $setOnInsert: { "auth.otp": otp } });

  console.log(otp);

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
