import { IProduct } from "../../@types/storage";
import planetScalePrisma from "../../database/planetScale.mysql";

const create = async (product: IProduct) => {
  const { products } = planetScalePrisma;

  const response = await products.create({ data: product as any });

  return { success: true, data: response };
};

export default create;
