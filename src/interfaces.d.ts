import { BaseValidation } from '@vuelidate/core';

export {};

/**
 * @description Here's a way to extend the global interfaces.
 */
declare global {
  interface IBindStateForm {
    solo: boolean;
    flat: boolean;
    placeholder: string;
    class: string;
    hideDetails: string;
    autocomplete: string;
  }

  interface IComponentComposableOptions {
    clearBeforeUnmount?: boolean;
  }

  interface ICurrencyOptions {
    minimumFractionDigits: number;
    style: string;
    currency: string;
  }

  interface IPagination {
    total: number;
    skip: number;
    limit: number;
  }

  interface IPropsFormGroup {
    isNameAsLabel: boolean;
    isNameAsPlaceholder: boolean;
    isNotHaveSpacing: boolean;
    labelFor?: string;
    name: string;
    spacingBottom: string;
    validators: BaseValidation;
  }

  interface IResponseListenerForm {
    input: () => void;
    blur: () => void;
  }

  interface IResponseSubscription {
    id: number;
    user_id: number;
    start_date: string;
    end_date: string;
    payment_total: number;
    payment_status: string;
    payment_url: string;
  }

  interface IResponseUserData {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    profile_photo_url: string;
    subscription: IResponseSubscription[];
    created_at: string;
    updated_at: string;
  }

  interface IBusEvent {
    [key: string]: unknown;
    [key: symbol]: unknown;
  }
}
