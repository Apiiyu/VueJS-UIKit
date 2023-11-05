import { Validation, ValidationRuleWithParams } from '@vuelidate/core';
import { Ref } from 'vue';

export interface IAuthenticationStateStore {
  authentication_isLoading: boolean;
  authentication_token: string;
  authentication_userData: unknown;
}

export interface IAuthenticationLoginPayload {
  email: string;
  password: string;
}

export interface IAuthenticationRegisterPayload extends IAuthenticationLoginPayload {
  name: string;
}

export interface IAuthenticationResponse {
  token: string;
  userData: unknown;
}

export interface IPropsAuthenticationForm {
  textBtnPrimary: string;
  textBtnSecondary: string;
  type: 'login' | 'register';
  urlBtnSecondary: string;
}

export interface IProvideAuthentication {
  authentication_formData: IAuthenticationLoginPayload | IAuthenticationRegisterPayload;
  authentication_formValidations: Ref<
    Validation<{
      name: {
        required: ValidationRuleWithParams<any>;
      };
      email: {
        required: ValidationRuleWithParams<any>;
      };
      password: {
        required: ValidationRuleWithParams<any>;
      };
    }>
  >;
  authentication_onSubmit: () => Promise<void>;
}
