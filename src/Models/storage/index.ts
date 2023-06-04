import batchCreate from "./batchCreate.service";
import create from "./create.service";
import deleteProduct from "./delete.service";
import edit from "./edit.service";
import findAll from "./findAll.service";
import findById from "./findById.service";

class StorageModel {
  constructor() {
    this.findAll = findAll;
    this.findById = findById;
    this.create = create;
    this.batchCreate = batchCreate;
    this.edit = edit;
    this.delete = deleteProduct;
  }

  findAll: typeof findAll;
  findById: typeof findById;
  create: typeof create;
  batchCreate: typeof batchCreate;
  edit: typeof edit;
  delete: typeof deleteProduct;
}

export default StorageModel;
