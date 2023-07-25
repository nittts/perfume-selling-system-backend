import loginController from "./login.controller";
import logoutController from "./logout.controller";
import forgotPasswordController from "./forgotPassword.controller";
import oneTimePasswordController from "./oneTimePassword.controller";
import verifyOtpController from "./verifyOtp.controller";
import resetPasswordController from "./resetPassword.controller";

class authController {
  constructor() {
    this.login = loginController;
    this.logout = logoutController;
    this.forgotPassword = forgotPasswordController;
    this.oneTimePassword = oneTimePasswordController;
    this.verifyOtp = verifyOtpController;
    this.resetPassword = resetPasswordController;
  }

  login: typeof loginController;
  logout: typeof logoutController;
  forgotPassword: typeof forgotPasswordController;
  oneTimePassword: typeof oneTimePasswordController;
  verifyOtp: typeof verifyOtpController;
  resetPassword: typeof resetPasswordController;
}

export default authController;
