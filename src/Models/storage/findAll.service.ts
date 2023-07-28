import { LooseObject } from "../../@types";
import { IFilters } from "../../@types/storage";
import planetScalePrisma from "../../database/planetScale.mysql";

const filtersDict = {
  buyingValue: "buying_value",
  resellValue: "resell_value",
  name: "name",
  id: "id",
  category: "category",
  resellerProductId: "reseller_product_id",
  resellerId: "reseller_id",
  discount: "discount",
} as LooseObject;

const findAll = async (filters: IFilters) => {
  const where: LooseObject = {};

  Object.keys(filters).forEach((filter) => {
    where[filtersDict[filter]] = (filters as any)[filter];
  });

  const { products } = planetScalePrisma;

  const response = await products.findMany({ where });

  return { success: true, data: response };
};

export default findAll;
