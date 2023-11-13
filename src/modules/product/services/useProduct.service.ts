// Composables
import { useHttpAbort } from '@/app/composables';

// Constants
import {
  PRODUCT_BENEFITS,
  PRODUCT_FEATURES,
  PRODUCT_GET_ALL_PRODUCTS_REQUEST,
  PRODUCT_GET_ALL_PRODUCT_CATEGORIES_REQUEST,
} from '../constants';

// Interfaces
import {
  ICategoriesRequestQueryParams,
  IProductRequestQueryParams,
  IResponseListCategories,
  IResponseListProducts,
  IResponseProducts,
} from '../interfaces';

// Pinia
import { storeToRefs } from 'pinia';

// Store
import { useProductStore } from '../store';

// Vue
import { reactive } from 'vue';

// Vue Route
import { useRoute } from 'vue-router';

/**
 * @description Closure function that returns everything what we need into an object
 */
export const useProductService = () => {
  const { httpAbort_registerAbort, httpAbort_abortAllRequest } = useHttpAbort();
  const route = useRoute(); // Instance of the router
  const store = useProductStore(); // Instance of the store

  /**
   * @description Reactive data binding
   */
  const { product_listOfCategories, product_listOfProducts } = storeToRefs(store);
  const product_requestQueryParamsProducts = reactive<IProductRequestQueryParams>({
    limit: 3,
  });
  const product_requestQueryParamsCategories = reactive<ICategoriesRequestQueryParams>({
    id: route.path.includes('categories') ? +route.params.id : null,
    limit: 4,
    show_product: route.path.includes('categories') ? 1 : 0,
  });

  /**
   * @description Handle fetch api get list data of categories. We call the fetchProduct_getAllCategories function from the store to handle the request.
   */
  const product_fetchGetAllCategories = async (): Promise<IResponseListCategories> => {
    try {
      const result = await store.fetchProduct_getAllCategories(product_requestQueryParamsCategories, {
        ...httpAbort_registerAbort(PRODUCT_GET_ALL_PRODUCT_CATEGORIES_REQUEST),
      });

      return Promise.resolve<IResponseListCategories>(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  /**
   * @description Handle fetch api get list data of products. We call the fetchProduct_getAllProducts function from the store to handle the request.
   */
  const product_fetchGetAllProducts = async (): Promise<IResponseProducts | IResponseListProducts> => {
    try {
      const result = await store.fetchProduct_getAllProducts(product_requestQueryParamsProducts, {
        ...httpAbort_registerAbort(PRODUCT_GET_ALL_PRODUCTS_REQUEST),
      });

      return Promise.resolve<IResponseProducts | IResponseListProducts>(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    product_abortAllRequest: httpAbort_abortAllRequest,
    product_fetchGetAllCategories,
    product_fetchGetAllProducts,
    product_listOfBenefits: PRODUCT_BENEFITS,
    product_listOfCategories,
    product_listOfFeatures: PRODUCT_FEATURES,
    product_listOfProducts,
  };
};
