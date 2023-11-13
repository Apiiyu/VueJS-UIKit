// Composables
import { useHttpAbort } from '@/app/composables';

// Constants
import { PRODUCT_BENEFITS, PRODUCT_FEATURES, PRODUCT_GET_PRODUCT_DETAIL_REQUEST } from '../constants';

// Interfaces
import { IProductRequestQueryParams, IResponseListProducts, IResponseProducts } from '../interfaces';

// Store / Pinia
import { storeToRefs } from 'pinia';
import { useAuthenticationStore } from '@/modules/authentication/store';
import { useProductStore } from '../store';

// Vue
import { reactive, ref } from 'vue';

// Vue Route
import { useRoute } from 'vue-router';

/**
 * @description Closure function that returns everything what we need into an object
 */
export const useProductDetailService = () => {
  const { httpAbort_registerAbort, httpAbort_abortAllRequest } = useHttpAbort();
  const route = useRoute(); // Instance of the router
  const store = useProductStore(); // Instance of the store
  const authenticationStore = useAuthenticationStore(); // Instance of the store

  /**
   * @description Reactive data binding
   */
  const { authentication_userData } = storeToRefs(authenticationStore);
  const { product_getProductDetail } = storeToRefs(store);
  const productDetail_imagePrimary = ref<string>('');
  const productDetail_requestQueryParamsProducts = reactive<IProductRequestQueryParams>({
    id: +route.params.id,
  });

  /**
   * @description Handle change image primary
   */
  const productDetail_onChangeImagePrimary = (image: string): void => {
    productDetail_imagePrimary.value = image;
  };

  /**
   * @description Handle fetch api get data of detail product. We call the productDetail_fetchProductDetail function from the store to handle the request.
   */
  const productDetail_fetchProductDetail = async (): Promise<IResponseProducts | IResponseListProducts> => {
    try {
      const result = await store.fetchProduct_getAllProducts(productDetail_requestQueryParamsProducts, {
        ...httpAbort_registerAbort(PRODUCT_GET_PRODUCT_DETAIL_REQUEST),
      });
      productDetail_imagePrimary.value = (result as IResponseProducts).galleries[0].url;

      return Promise.resolve<IResponseProducts | IResponseListProducts>(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    productDetail_abortAllRequest: httpAbort_abortAllRequest,
    productDetail_fetchProductDetail,
    productDetail_imagePrimaryProduct: productDetail_imagePrimary,
    productDetail_listOfBenefits: PRODUCT_BENEFITS,
    productDetail_listOfFeatures: PRODUCT_FEATURES,
    productDetail_onChangeImagePrimary,
    productDetail_product: product_getProductDetail,
    productDetail_userData: authentication_userData,
  };
};
