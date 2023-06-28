import createClientService from "./create.service";
import deleteUserService from "./delete.service";

class clientsModel {
  constructor() {
    this.create = createClientService;
    this.delete = deleteUserService;
    this.update = () => {};
    this.read = () => {};
    this.myAccount = () => {};
    this.editMyAccount = () => {};
  }

  create: typeof createClientService;
  delete: typeof deleteUserService;
  update;
  read;
  myAccount;
  editMyAccount;
}

export default clientsModel;
