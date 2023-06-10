import loginController from "./login.controller";
import logoutController from "./logout.controller";

class authController {
  constructor() {
    this.login = loginController;
    this.logout = logoutController;
  }

  login: typeof loginController;
  logout: typeof loginController;
}

export default authController;
