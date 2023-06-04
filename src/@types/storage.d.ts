interface IFilters {
  buyingValue?: number;
  resellValue?: number;
  name?: string;
  id?: string;
  category?: string;
  resellerProductId?: string;
  resellerId?: string;
  discount?: boolean;
}

interface IProduct {
  buying_value: number;
  resell_value: number;
  name: string;
  id: string;
  category: string;
  reseller_product_id: string;
  reseller_id: string;
  discount?: boolean;
  discount_ammount?: number;
}

interface IProductEdit {
  name?: string;
  resell_value?: number;
  buying_value?: number;
  reseller_product_id?: string;
  category?: string;
  discount?: boolean;
  discount_ammount?: number;
}

type IProductArray = IProduct[];

export { IFilters, IProduct, IProductEdit, IProductArray };
