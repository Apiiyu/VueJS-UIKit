// Axios
import axios, { type InternalAxiosRequestConfig, type AxiosInstance, type AxiosError, AxiosResponse } from 'axios';

// Constants
import { EToastPosition, EToastType } from '@/app/constants/toast.constant';

// Mitt
import eventBus from '../mitt';

// Store
import { useAuthenticationStore } from '@/modules/authentication/store';

const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_URL ? `${import.meta.env.VITE_APP_BASE_API_URL}` : '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const store = useAuthenticationStore(); // Instance of the store

  if (store.authentication_token) {
    config.headers.Authorization = `Bearer ${store.authentication_token}`;
  }

  return config;
});

httpClient.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
});

httpClient.interceptors.response.use(undefined, (error: AxiosError<{ message?: string }>) => {
  /**
   * @description Here's we can handle various errors.
   */
  switch (error.response?.status) {
    case 400:
      eventBus.emit(EToastType.DANGER, {
        isOpen: true,
        message: error.response?.data?.message ?? 'Bad Request',
        position: EToastPosition.TOP_RIGHT,
        type: EToastType.DANGER,
      });
      break;
    case 401:
      eventBus.emit(EToastType.DANGER, {
        isOpen: true,
        message: error.response?.data?.message ?? 'Unauthorized',
        position: EToastPosition.TOP_RIGHT,
        type: EToastType.DANGER,
      });
      break;
    case 500:
      eventBus.emit(EToastType.DANGER, {
        isOpen: true,
        message: error.response?.data?.message ?? 'Internal Server Error',
        position: EToastPosition.TOP_RIGHT,
        type: EToastType.DANGER,
      });
      break;
    default:
      eventBus.emit(EToastType.DANGER, {
        isOpen: true,
        message: error.response?.data?.message ?? 'Something went wrong',
        position: EToastPosition.TOP_RIGHT,
        type: EToastType.DANGER,
      });
      break;
  }

  return Promise.reject(error);
});

export default httpClient;
