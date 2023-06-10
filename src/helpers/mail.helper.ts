import nodeMailer from "nodemailer";

interface ISendEmail {
  email: string;
  from: string;
  to: string;
  secure?: boolean;
  subject: string;
}

const buildEmailBody = () => "<h1>Hello world!</h1>";

const sendEmail = async ({ email, from, to, secure, subject }: ISendEmail) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 587,
    secure: secure || false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    logger: true,
  });

  const res = await transporter.sendMail({
    from,
    to,
    subject,
    html: email,
  });

  console.log("Message sent!: %s", res.messageId);
};

export { buildEmailBody, sendEmail };
