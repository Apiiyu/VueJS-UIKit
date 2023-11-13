import type { RouteRecordRaw } from 'vue-router';

// Components
import { AppBaseWrapper } from '@/app/components/base';

// Constants
import { LAYOUT_OPTIONS } from '@/app/constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/authentication',
    component: AppBaseWrapper,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/AuthenticationLoginUI.vue'),
        meta: {
          requiresAuthorization: false,
          layout: LAYOUT_OPTIONS.AUTHENTICATION,
        },
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/AuthenticationRegisterUI.vue'),
        meta: {
          requiresAuthorization: false,
          layout: LAYOUT_OPTIONS.AUTHENTICATION,
        },
      },
    ],
  },
];

export default routes;
