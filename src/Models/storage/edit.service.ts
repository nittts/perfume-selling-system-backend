import { IProductEdit } from "../../@types/storage";

const edit = (productData: IProductEdit, id: string) => {
  console.log(productData, id);

  return { success: true, data: {} };
};

export default edit;
