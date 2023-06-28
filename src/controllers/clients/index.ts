import createClientController from "./create.controller";
import deleteUserController from "./delete.controller";

class clientsController {
  constructor() {
    this.create = createClientController;
    this.delete = deleteUserController;
    this.update = () => {};
    this.read = () => {};
    this.myAccount = () => {};
    this.editMyAccount = () => {};
  }

  create: typeof createClientController;
  delete: typeof deleteUserController;
  update;
  read;
  myAccount;
  editMyAccount;
}

export default clientsController;
