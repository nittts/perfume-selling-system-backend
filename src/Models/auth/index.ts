import loginService from "./login.service";
import logoutService from "./logout.service";

class authModel {
  constructor() {
    this.login = loginService;
    this.logout = logoutService;
  }

  login: typeof loginService;
  logout: typeof logoutService;
}

export default authModel;
