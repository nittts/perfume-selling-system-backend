import createUserService from "./create.service";
import deleteUserService from "./delete.service";
import findAllService from "./findAll.service";
import myAccountService from "./myAccount.service";
import updateUserService from "./update.service";
import updateMyAccountService from "./updateMyAccount.service";

class usersModel {
  constructor() {
    this.create = createUserService;
    this.delete = deleteUserService;
    this.update = updateUserService;
    this.findAll = findAllService;
    this.myAccount = myAccountService;
    this.updateMyAccount = updateMyAccountService;
  }

  create: typeof createUserService;
  delete: typeof deleteUserService;
  update: typeof updateUserService;
  findAll: typeof findAllService;
  myAccount: typeof myAccountService;
  updateMyAccount: typeof updateMyAccountService;
}

export default usersModel;
