// Store
import { useAuthenticationStore } from '@/modules/authentication/store';

// Vue
import { ComputedRef, computed } from 'vue';

// Vue Router
import { useRoute } from 'vue-router';

/**
 * @description Computed property that returns a boolean value if the current route is not the authentication route
 */
export const isShowButtonActions: ComputedRef<boolean> = computed(() => {
  const route = useRoute();

  return !route.fullPath.includes('authentication');
});

/**
 * @description Computed property that returns a boolean value if the property isAuthenticated from the store is true
 */
export const isShowUserProfile: ComputedRef<boolean> = computed(() => {
  const store = useAuthenticationStore();

  return store.authentication_isAuthenticated;
});

export const userData: ComputedRef<IResponseUserData> = computed(() => {
  const store = useAuthenticationStore();

  return store.authentication_userData as IResponseUserData;
});
