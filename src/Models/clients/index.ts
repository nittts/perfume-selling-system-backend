import createClientService from "./create.service";

class clientsModel {
  constructor() {
    this.create = createClientService;
    this.delete = () => {};
    this.update = () => {};
    this.read = () => {};
    this.myAccount = () => {};
    this.editMyAccount = () => {};
  }

  create: typeof createClientService;
  delete;
  update;
  read;
  myAccount;
  editMyAccount;
}

export default clientsModel;
