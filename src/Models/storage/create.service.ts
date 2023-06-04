import { IProduct } from "../../@types/storage";
import planetScalePrisma from "../../database/planetScale.mysql";

const create = async (product: IProduct) => {
  const { products } = planetScalePrisma;

  const response = await products
    .create({ data: product as any })
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

export default create;
