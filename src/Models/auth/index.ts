import forgotPasswordService from "./forgotPassword.service";
import loginService from "./login.service";
import logoutService from "./logout.service";

class authModel {
  constructor() {
    this.login = loginService;
    this.logout = logoutService;
    this.forgotPassword = forgotPasswordService;
  }

  login: typeof loginService;
  logout: typeof logoutService;
  forgotPassword: typeof forgotPasswordService;
}

export default authModel;
