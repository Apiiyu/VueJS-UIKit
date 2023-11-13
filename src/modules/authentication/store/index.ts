// Axios
import { AxiosRequestConfig } from 'axios';

// Constants
import {
  AUTHENTICATION_ENDPOINT_LOGIN,
  AUTHENTICATION_ENDPOINT_REGISTER,
  AUTHENTICATION_ENDPOINT_USER,
} from '../constants';

// Interfaces
import {
  IAuthenticationLoginPayload,
  IAuthenticationRegisterPayload,
  IAuthenticationResponse,
  IAuthenticationStateStore,
} from '../interfaces';

// Pinia
import { defineStore } from 'pinia';

// Plugins
import httpClient from '@/plugins/axios';

export const useAuthenticationStore = defineStore('authentication', {
  state: (): IAuthenticationStateStore => ({
    authentication_isAuthenticated: false,
    authentication_isLoading: false,
    authentication_token: '',
    authentication_userData: null as unknown | {} as IResponseUserData,
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
    async fetchAuthentication_login(
      payload: IAuthenticationLoginPayload,
      requestConfigurations: AxiosRequestConfig,
    ): Promise<IAuthenticationResponse> {
      this.authentication_isLoading = true;

      try {
        const response = await httpClient.post<IAuthenticationResponse>(AUTHENTICATION_ENDPOINT_LOGIN, payload, {
          ...requestConfigurations,
        });
        this.authentication_isAuthenticated = true;
        this.authentication_token = response.data.access_token;

        return Promise.resolve(response.data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.authentication_isLoading = false;
      }
    },

    /**
     * @description Handle fetch api authentication login.
     * @url /register
     * @method POST
     * @access public
     */
    async fetchAuthentication_register(
      payload: IAuthenticationRegisterPayload,
      requestConfigurations: AxiosRequestConfig,
    ): Promise<IAuthenticationResponse> {
      this.authentication_isLoading = true;

      try {
        const response = await httpClient.post<IAuthenticationResponse>(
          AUTHENTICATION_ENDPOINT_REGISTER,
          payload,
          {
            ...requestConfigurations,
          },
        );
        this.authentication_token = response.data.access_token;

        return Promise.resolve(response.data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.authentication_isLoading = false;
      }
    },

    /**
     * @description Handle fetch api user profile.
     * @url /user
     * @method GET
     * @access public
     */
    async fetchAuthentication_getUserProfile(
      requestConfigurations: AxiosRequestConfig,
    ): Promise<IResponseUserData> {
      this.authentication_isLoading = true;

      try {
        const response = await httpClient.get<IResponseUserData>(AUTHENTICATION_ENDPOINT_USER, {
          ...requestConfigurations,
        });
        this.authentication_userData = response.data;

        return Promise.resolve<IResponseUserData>(response.data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.authentication_isLoading = false;
      }
    },
  },
  persist: {
    key: 'authentication',
    paths: ['authentication_isAuthenticated', 'authentication_token', 'authentication_userData'],
    storage: sessionStorage,
  },
});
