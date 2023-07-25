import forgotPasswordService from "./forgotPassword.service";
import loginService from "./login.service";
import logoutService from "./logout.service";
import oneTimePasswordService from "./oneTimePassword.service";
import resetPasswordService from "./resetPassword.service";
import verifyOtpService from "./verifyOtp.service";

class authModel {
  constructor() {
    this.login = loginService;
    this.logout = logoutService;
    this.forgotPassword = forgotPasswordService;
    this.oneTimePassword = oneTimePasswordService;
    this.verifyOtp = verifyOtpService;
    this.resetPassword = resetPasswordService;
  }

  login: typeof loginService;
  logout: typeof logoutService;
  forgotPassword: typeof forgotPasswordService;
  oneTimePassword: typeof oneTimePasswordService;
  verifyOtp: typeof verifyOtpService;
  resetPassword: typeof resetPasswordService;
}

export default authModel;
