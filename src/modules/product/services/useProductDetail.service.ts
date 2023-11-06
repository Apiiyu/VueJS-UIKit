// Constants
import { PRODUCT_BENEFITS, PRODUCT_FEATURES } from '../constants';

/**
 * @description Closure function that returns everything what we need into an object
 */
export const useProductDetailService = () => {
  return {
    productDetail_listOfBenefits: PRODUCT_BENEFITS,
    productDetail_listOfFeatures: PRODUCT_FEATURES,
  };
};
