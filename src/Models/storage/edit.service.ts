import { IProductEdit } from "../../@types/storage";
import planetScalePrisma from "../../database/planetScale.mysql";

const edit = async (productData: IProductEdit, id: string) => {
  const { products } = planetScalePrisma;

  const response = await products
    .update({
      data: productData,
      where: {
        id: id,
      },
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

export default edit;
