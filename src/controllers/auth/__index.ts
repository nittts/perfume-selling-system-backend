import loginController from "./login.controller";
import logoutController from "./logout.controller";
import forgotPasswordController from "./forgotPassword.controller";
import oneTimePasswordController from "./oneTimePassword.controller";

class authController {
  constructor() {
    this.login = loginController;
    this.logout = logoutController;
    this.forgotPassword = forgotPasswordController;
    this.oneTimePassword = oneTimePasswordController;
  }

  login: typeof loginController;
  logout: typeof logoutController;
  forgotPassword: typeof forgotPasswordController;
  oneTimePassword: typeof oneTimePasswordController;
}

export default authController;
