import { IProduct } from "../../@types/storage";

const create = (product: IProduct) => {
  console.log(product);

  return { success: true, data: {} };
};

export default create;
