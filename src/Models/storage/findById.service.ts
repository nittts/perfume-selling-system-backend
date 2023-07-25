import planetScalePrisma from "../../database/planetScale.mysql";

const findById = async (id: string) => {
  const { products } = planetScalePrisma;

  const response = await products.findFirst({
    where: {
      id: id,
    },
  });

  return { success: true, data: response };
};

export default findById;
