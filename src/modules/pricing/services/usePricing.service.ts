// Composables
import { useHttpAbort } from '@/app/composables';

// Constants
import { PRODUCT_BENEFITS } from '@/modules/product/constants';
import { PRICING_PLANS, PRICING_CHECKOUT_REQUEST } from '../constants';

// Interfaces
import { IPricingPayload, IPricingResponse } from '../interfaces';

// Store / Pinia
import { storeToRefs } from 'pinia';
import { usePricingStore } from '../store';
import { useAuthenticationStore } from '@/modules/authentication/store';

// Vue
import { computed, reactive } from 'vue';

// Vuelidate
import useVuelidate from '@vuelidate/core';
import { required, numeric } from '@vuelidate/validators';

/**
 * @description Closure function that returns everything what we need into an object
 */
export const usePricingService = () => {
  const { httpAbort_registerAbort, httpAbort_abortAllRequest } = useHttpAbort();
  const store = usePricingStore(); // Instance of the store
  const authenticationStore = useAuthenticationStore(); // Instance of the authentication store

  /**
   * @description Reactive data binding
   */
  const { authentication_userData } = storeToRefs(authenticationStore);
  const pricing_isLoading = store.pricing_isLoading;
  const pricing_formData = reactive<IPricingPayload>({
    payment_status: 'PENDING',
    payment_total: 0,
  });

  /**
   * @description Form validations
   */
  const pricing_formRules = computed(() => ({
    payment_status: { required },
    payment_total: { required, numeric },
  }));
  const pricing_formValidations = useVuelidate(pricing_formRules, pricing_formData, {
    $autoDirty: true,
  });

  /**
   * @description Handle fetch api checkout the pricing plan. We call the fetchPricingCheckout function from the store to handle the request.
   */
  const pricing_fetchPricingCheckout = async (): Promise<IPricingResponse> => {
    try {
      const result = await store.fetchPricing_checkout(pricing_formData, {
        ...httpAbort_registerAbort(PRICING_CHECKOUT_REQUEST),
      });

      // After request was successfully created, then we should directly to midtrans screen
      window.open(result.payment_url);

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  /**
   * @description Handle action on submit form.
   */
  const pricing_onSubmit = async (price: number): Promise<void> => {
    // Set parameter price to the reactive variable formData
    pricing_formData.payment_total = price;

    pricing_formValidations.value.$touch();
    if (pricing_formValidations.value.$invalid) return;

    try {
      await pricing_fetchPricingCheckout();
    } catch (error) {
      Promise.reject(error);
    }
  };

  return {
    pricing_abortAllRequest: httpAbort_abortAllRequest,
    pricing_isLoading,
    pricing_listOfBenefits: PRODUCT_BENEFITS,
    pricing_listOfPlans: PRICING_PLANS,
    pricing_onSubmit,
    pricing_userData: authentication_userData,
  };
};
