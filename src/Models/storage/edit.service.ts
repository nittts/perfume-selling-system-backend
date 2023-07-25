import { IProductEdit } from "../../@types/storage";
import planetScalePrisma from "../../database/planetScale.mysql";

const edit = async (productData: IProductEdit, id: string) => {
  const { products } = planetScalePrisma;

  const response = await products.update({
    data: productData,
    where: {
      id: id,
    },
  });

  return { success: true, data: response };
};

export default edit;
