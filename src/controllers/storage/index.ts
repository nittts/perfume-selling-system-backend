import batchCreateController from "./batchCreate.controller";
import createController from "./create.controller";
import deleteController from "./delete.service";
import editController from "./edit.controller";
import findAllController from "./findAll.controller";
import findByIdController from "./findById.controller";

class StorageController {
  constructor() {
    this.batchCreate = batchCreateController;
    this.create = createController;
    this.delete = deleteController;
    this.edit = editController;
    this.findAll = findAllController;
    this.findById = findByIdController;
  }

  batchCreate: typeof batchCreateController;
  create: typeof createController;
  delete: typeof deleteController;
  edit: typeof editController;
  findAll: typeof findAllController;
  findById: typeof findByIdController;
}

export default StorageController;
