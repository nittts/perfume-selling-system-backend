import forgotPasswordService from "./forgotPassword.service";
import loginService from "./login.service";
import logoutService from "./logout.service";
import oneTimePasswordService from "./oneTimePassword.service";

class authModel {
  constructor() {
    this.login = loginService;
    this.logout = logoutService;
    this.forgotPassword = forgotPasswordService;
    this.oneTimePassword = oneTimePasswordService;
  }

  login: typeof loginService;
  logout: typeof logoutService;
  forgotPassword: typeof forgotPasswordService;
  oneTimePassword: typeof oneTimePasswordService;
}

export default authModel;
