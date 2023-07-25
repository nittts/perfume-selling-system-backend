import planetScalePrisma from "../../database/planetScale.mysql";

const deleteProduct = async (id: string) => {
  const { products } = planetScalePrisma;

  const response = await products.delete({
    where: {
      id: id,
    },
  });

  return { success: true, data: response };
};

export default deleteProduct;
