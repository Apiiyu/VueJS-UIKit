// Interfaces
import type { IProductBenefit } from '@/app/components/base/AppBaseProductBenefits.vue';

interface IPricingPlans {
  description: string;
  features: string[];
  price: number;
  title: string;
}

export interface IProvidePricing {
  pricing_listOfBenefits: IProductBenefit[];
  pricing_listOfPlans: IPricingPlans[];
}
