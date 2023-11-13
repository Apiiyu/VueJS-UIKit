// Axios
import { AxiosRequestConfig } from 'axios';

// Constants
import { PRODUCT_CATEGORIES_ENDPOINT_BASE, PRODUCT_ENDPOINT_BASE } from '../constants/productApi.constant';

// Composables
import { cleanRequestQueryParams } from '@/app/composables';

// Interfaces
import {
  ICategoriesRequestQueryParams,
  IProductRequestQueryParams,
  IResponseListCategories,
  IResponseListProducts,
  IResponseProducts,
} from '../interfaces';

// Pinia
import { defineStore } from 'pinia';

// Plugins
import httpClient from '@/plugins/axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    product_isLoading: false,
    product_productDetail: {} as IResponseProducts,
    product_listOfCategories: {} as IResponseListCategories | [] as IResponseListCategories['data'],
    product_listOfProducts: [] as IResponseListProducts['data'],
  }),
  getters: {
    /**
     * @description Manipulate the data from the store to make property features as an array of strings.
     */
    product_getProductDetail: state => {
      return {
        ...state.product_productDetail,
        features: (state.product_productDetail.features as string)
          ? (state.product_productDetail.features as string)
              .split(',')
              .filter(feature => feature !== 'Great Features')
          : state.product_productDetail.features,
      };
    },
  },
  actions: {
    /**
     * @description Handle fetch api get list data of products.
     * @url /products
     * @method GET
     * @access public
     */
    async fetchProduct_getAllProducts(
      requestQuery: IProductRequestQueryParams,
      requestConfigurations: AxiosRequestConfig,
    ): Promise<IResponseProducts | IResponseListProducts> {
      this.product_isLoading = true;

      try {
        const response = await httpClient.get<IResponseProducts | IResponseListProducts>(PRODUCT_ENDPOINT_BASE, {
          ...requestConfigurations,
          params: {
            ...cleanRequestQueryParams(requestQuery),
          },
        });

        this.product_listOfProducts = (response.data as IResponseListProducts)?.data ?? [];
        this.product_productDetail = (response.data as IResponseProducts) ?? {};

        return Promise.resolve<IResponseProducts | IResponseListProducts>(response.data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.product_isLoading = false;
      }
    },
    /**
     * @description Handle fetch api get list data of categories.
     * @url /categories
     * @method GET
     * @access public
     */
    async fetchProduct_getAllCategories(
      requestQuery: ICategoriesRequestQueryParams,
      requestConfigurations: AxiosRequestConfig,
    ): Promise<IResponseListCategories> {
      try {
        const response = await httpClient.get<IResponseListCategories>(PRODUCT_CATEGORIES_ENDPOINT_BASE, {
          ...requestConfigurations,
          params: {
            ...cleanRequestQueryParams(requestQuery),
          },
        });

        this.product_listOfCategories = response.data.data ?? response.data;

        return Promise.resolve<IResponseListCategories>(response.data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.product_isLoading = false;
      }
    },
  },
});
