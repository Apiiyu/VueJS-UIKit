import { IResponseListCategories, IResponseListProducts } from '@/modules/product/interfaces';

export interface IPropsCategoryItem {
  id: number;
  imageUri: string;
  title: string;
  total: number;
}

export interface IProvideDashboard {
  dashboard_listOfCategories: IResponseListCategories['data'];
  dashboard_listOfProducts: IResponseListProducts['data'];
}
