import { sendEmail } from "../../helpers/mail.helper";

const forgotPasswordService = async (email: string) => {
  const res = await sendEmail({
    to: email,
    secure: true,
    subject: "Recuperação de Senha",
    templateName: "forgotPassword",
    templateData: {
      name: "Wililam Baierle Charqueiro",
      action_url: "https://www.google.com.br",
      operating_system: "Windows 10",
      browser_name: "Opera GX",
      support_url: "https://www.youtube.com/watch?v=P2KtdwU8XOc",
    },
  });

  return res;
};

export default forgotPasswordService;
