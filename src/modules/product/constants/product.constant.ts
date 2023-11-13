// Interfaces
import type { IProductBenefit } from '@/app/components/base/AppBaseProductBenefits.vue';

export const PRODUCT_GET_ALL_PRODUCTS_REQUEST = 'PRODUCT_GET_ALL_PRODUCTS_REQUEST';
export const PRODUCT_GET_ALL_PRODUCT_CATEGORIES_REQUEST = 'PRODUCT_GET_ALL_PRODUCT_CATEGORIES_REQUEST';
export const PRODUCT_GET_PRODUCT_DETAIL_REQUEST = 'PRODUCT_GET_PRODUCT_DETAIL_REQUEST';
export const PRODUCT_BENEFITS: IProductBenefit[] = [
  {
    description: 'Accelerate your work with our millions of ready-to-use design projects.',
    iconName: 'icon-customizable.svg',
    title: 'Cuztomizable',
  },
  {
    description: 'Accelerate your work with our millions of ready-to-use design projects.',
    iconName: 'icon-fortune.svg',
    title: '500 Fortune',
  },
  {
    description: 'Accelerate your work with our millions of ready-to-use design projects.',
    iconName: 'icon-documentation.svg',
    title: 'Documentation',
  },
];

export const PRODUCT_FEATURES: string[] = [
  'Customizable layers',
  'Documentation',
  'Icon set design',
  'Pre-built UI screens',
];
