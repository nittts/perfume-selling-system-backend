import { Request, Response } from "express";
import authModel from "../../Models/auth/__index";
import { AppError } from "../../middlewares/asyncErrors.middleware";
import LoggerService from "../../utils/logger";

const auth = new authModel();

const verifyOtpController = async (req: Request, res: Response) => {
  const { email, otp } = req.body;

  const response = await auth.verifyOtp(Number(otp), email);

  return res.status(200).send(response);
};

export default verifyOtpController;
