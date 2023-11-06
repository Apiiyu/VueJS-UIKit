import type { RouteRecordRaw } from 'vue-router';

// Components
import { AppBaseWrapper } from '@/app/components/base';

// Constants
import { LAYOUT_OPTIONS } from '@/app/constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/success',
    component: AppBaseWrapper,
    children: [
      {
        path: '',
        name: 'success',
        component: () => import('../views/SuccessUI.vue'),
        meta: {
          requiresAuthorization: false,
          layout: LAYOUT_OPTIONS.DEFAULT,
        },
      },
    ],
  },
];

export default routes;
