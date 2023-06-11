import { IProductArray } from "../../controllers/storage";
import planetScalePrisma from "../../database/planetScale.mysql";

const batchCreate = async (productsArr: IProductArray) => {
  const { products } = planetScalePrisma;

  const response = await products
    .createMany({
      data: productsArr as any,
    })
    .then(async () => {
      await planetScalePrisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await planetScalePrisma.$disconnect();
      process.exit(1);
    });

  return { success: true, data: response };
};

export default batchCreate;
