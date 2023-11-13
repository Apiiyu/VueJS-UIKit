import type { RouteRecordRaw } from 'vue-router';

// Components
import { AppBaseWrapper } from '@/app/components/base';

// Constants
import { LAYOUT_OPTIONS } from '@/app/constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/product',
    component: AppBaseWrapper,
    children: [
      {
        path: ':id/categories',
        name: 'productCategories',
        component: () => import('../views/ProductCategoriesUI.vue'),
        meta: {
          requiresAuthorization: false,
          layout: LAYOUT_OPTIONS.DEFAULT,
        },
      },
      {
        path: ':id/detail',
        name: 'productDetail',
        component: () => import('../views/ProductDetailUI.vue'),
        meta: {
          requiresAuthorization: false,
          layout: LAYOUT_OPTIONS.DEFAULT,
        },
      },
    ],
  },
];

export default routes;
