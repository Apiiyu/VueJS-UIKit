// Constants
import { PRODUCT_BENEFITS } from '@/modules/product/constants';
import { PRICING_PLANS } from '../constants';

/**
 * @description Closure function that returns everything what we need into an object
 */
export const usePricingService = () => {
  return {
    pricing_listOfBenefits: PRODUCT_BENEFITS,
    pricing_listOfPlans: PRICING_PLANS,
  };
};
