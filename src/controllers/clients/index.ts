import createClientController from "./create.controller";

class clientsController {
  constructor() {
    this.create = createClientController;
    this.delete = () => {};
    this.update = () => {};
    this.read = () => {};
    this.myAccount = () => {};
    this.editMyAccount = () => {};
  }

  create: typeof createClientController;
  delete;
  update;
  read;
  myAccount;
  editMyAccount;
}

export default clientsController;
