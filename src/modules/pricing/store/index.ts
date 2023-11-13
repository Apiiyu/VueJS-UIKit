// Axios
import { AxiosRequestConfig } from 'axios';

// Constants
import { PRICING_CHECKOUT_ENDPOINT } from '../constants';

// Interfaces
import { IPricingPayload, IPricingResponse } from '../interfaces';

// Pinia
import { defineStore } from 'pinia';

// Plugins
import httpClient from '@/plugins/axios';

export const usePricingStore = defineStore('pricing', {
  state: () => ({
    pricing_isLoading: false,
  }),
  getters: {
    /**
     * @description Usually, we define getters if the getter name is different from the state name.
     */
  },
  actions: {
    /**
     * @description Handle fetch api authentication login.
     * @url /login
     * @method POST
     * @access public
     */
    async fetchPricing_checkout(
      payload: IPricingPayload,
      requestConfigurations: AxiosRequestConfig,
    ): Promise<IPricingResponse> {
      this.pricing_isLoading = true;

      try {
        const response = await httpClient.post<IPricingResponse>(`${PRICING_CHECKOUT_ENDPOINT}`, payload, {
          ...requestConfigurations,
        });

        return Promise.resolve(response.data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.pricing_isLoading = false;
      }
    },
  },
});
