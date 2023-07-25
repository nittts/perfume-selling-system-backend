import { IProductArray } from "../../@types/storage";
import planetScalePrisma from "../../database/planetScale.mysql";

const batchCreate = async (productsArr: IProductArray) => {
  const { products } = planetScalePrisma;

  const response = await products.createMany({
    data: productsArr as any,
  });

  return { success: true, data: response };
};

export default batchCreate;
