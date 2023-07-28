import createUserController from "./create.controller";
import deleteUserController from "./delete.controller";
import findAllController from "./findAll.controller";
import myAccountController from "./myAccount.controller";
import updateUserController from "./update.controller";
import updateMyAccountController from "./updateMyAccount.controller";

class usersController {
  constructor() {
    this.create = createUserController;
    this.delete = deleteUserController;
    this.update = updateUserController;
    this.findAll = findAllController;
    this.myAccount = myAccountController;
    this.updateMyAccount = updateMyAccountController;
  }

  create: typeof createUserController;
  delete: typeof deleteUserController;
  update: typeof updateUserController;
  findAll: typeof findAllController;
  myAccount: typeof myAccountController;
  updateMyAccount: typeof updateMyAccountController;
}

export default usersController;
