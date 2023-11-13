import type { IProductBenefit } from '@/app/components/base/AppBaseProductBenefits.vue';

export interface ICategoriesRequestQueryParams {
  id?: number | null;
  limit?: number;
  name?: string;
  show_product?: number;
}

export interface IProductRequestQueryParams {
  id?: number;
  categories?: string;
  description?: string;
  limit?: number;
  name?: string;
  subtitle?: string;
}

export interface IProvideProductCategories {
  product_listOfCategories: IResponseListCategories;
}

export interface IProvideProductDetail {
  productDetail_imagePrimaryProduct: string;
  productDetail_listOfBenefits: IProductBenefit[];
  productDetail_listOfFeatures: string[];
  productDetail_onChangeImagePrimary: (image: string) => void;
  productDetail_product: IResponseProducts;
  productDetail_userData: IResponseUserData;
}

export interface IResponseCategory {
  id: number;
  name: string;
  thumbnails: string;
  products_count?: number;
}

export interface IResponseProductGalleries {
  id: number;
  product_id: number;
  url: string;
}

export interface IResponseProducts {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  thumbnails: string;
  is_figma: number;
  is_sketch: number;
  features: string | string[];
  file: string;
  category: IResponseCategory;
  galleries: IResponseProductGalleries[];
}

export interface IResponseListCategories {
  id?: number;
  current_page: number;
  data: IResponseCategory[];
  products: IResponseProducts[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  path: string;
  total: number;
}

export interface IResponseListProducts {
  current_page: number;
  data: IResponseProducts[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  path: string;
  total: number;
}
