import loginController from "./login.controller";
import logoutController from "./logout.controller";
import forgotPasswordController from "./forgotPassword.controller";

class authController {
  constructor() {
    this.login = loginController;
    this.logout = logoutController;
    this.forgotPassword = forgotPasswordController;
  }

  login: typeof loginController;
  logout: typeof loginController;
  forgotPassword: typeof forgotPasswordController;
}

export default authController;
