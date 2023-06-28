import { createTransport } from "nodemailer";
import Handlebars from "handlebars";
import fs from "fs";
import path from "path";

interface ISendEmail {
  to: string;
  secure?: boolean;
  subject: string;
  templateName: string;
  templateData: any;
}

const buildEmailBody = (emailName: string, context: any) => {
  const emailTemplate = fs.readFileSync(
    path.join(__dirname, "..", "..", `/src/templates/emails/${emailName}.email.handlebars`),
    "utf-8"
  );

  console.log(context);

  const template = Handlebars.compile(emailTemplate);

  const messageBody = template(context);

  return messageBody;
};

const sendEmail = async ({ to, subject, templateName, templateData }: ISendEmail) => {
  const transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) ?? 465,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const template = buildEmailBody(templateName, templateData);

  const mailOptions = {
    from: "silviavariedades.worker@gmail.com",
    to: to,
    subject: `Silvia Variedades - ${subject}`,
    html: template,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return { success: true, message: "E-mail enviado com sucesso." };
};

export { buildEmailBody, sendEmail };
