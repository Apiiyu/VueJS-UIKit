// Interfaces
import type { IProductBenefit } from '@/app/components/base/AppBaseProductBenefits.vue';

interface IPricingPlans {
  description: string;
  features: string[];
  price: number;
  title: string;
}

export interface IPricingPayload {
  payment_total: number;
  payment_status: string;
}

export interface IPricingResponse extends IPricingPayload {
  id: number;
  user_id: number;
  start_date: string;
  end_date: string;
  payment_url: string;
  user: IResponseUserData;
}
export interface IProvidePricing {
  pricing_isLoading: boolean;
  pricing_listOfBenefits: IProductBenefit[];
  pricing_listOfPlans: IPricingPlans[];
  pricing_onSubmit: (price: number) => Promise<IPricingResponse>;
  pricing_userData: IResponseUserData;
}
