import { IProductArray } from "../../@types/storage";

const batchCreate = (products: IProductArray) => {
  console.log(products);

  return { success: true, data: [] };
};

export default batchCreate;
