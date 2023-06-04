import planetScalePrisma from "../../database/planetScale.mysql";

const findById = async (id: string) => {
  const { products } = planetScalePrisma;

  const response = await products
    .findFirst({
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

export default findById;
