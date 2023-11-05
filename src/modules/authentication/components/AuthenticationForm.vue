<template>
  <form class="form-group" @submit.prevent="authentication_onSubmit">
    <div class="mb-4" v-if="type === 'register'">
      <AppBaseFormGroup
        name="Name"
        is-not-have-spacing
        v-slot="{ classes }"
        :validators="authentication_formValidations.name"
      >
        <label class="block mb-1" for="name">Name</label>
        <input
          id="name"
          class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
          type="text"
          name="name"
          :class="{ ...classes }"
          v-model="authentication_formData.name"
          v-bind="{ ...useBindStateForm('Type your full name') }"
          v-on="useListenerForm(authentication_formValidations, 'name')"
        />
      </AppBaseFormGroup>
    </div>

    <div class="mb-4">
      <AppBaseFormGroup
        name="Email"
        is-not-have-spacing
        v-slot="{ classes }"
        :validators="authentication_formValidations.email"
      >
        <label class="block mb-1" for="email">Email Address</label>
        <input
          id="email"
          type="text"
          name="email"
          class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
          :class="{ ...classes }"
          v-model="authentication_formData.email"
          v-bind="{ ...useBindStateForm('Type your email') }"
          v-on="useListenerForm(authentication_formValidations, 'email')"
        />
      </AppBaseFormGroup>
    </div>
    <div class="mb-4">
      <AppBaseFormGroup
        name="Password"
        is-not-have-spacing
        v-slot="{ classes }"
        :validators="authentication_formValidations.password"
      >
        <label class="block mb-1" for="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
          :class="{ ...classes }"
          v-model="authentication_formData.password"
          v-bind="{ ...useBindStateForm('Type your password') }"
          v-on="useListenerForm(authentication_formValidations, 'password')"
        />
      </AppBaseFormGroup>
    </div>
    <div class="mt-6">
      <button
        type="submit"
        class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:px-10 hover:shadow"
      >
        {{ textBtnPrimary }}
      </button>
      <a
        :href="urlBtnSecondary"
        class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:px-10 hover:shadow"
      >
        {{ textBtnSecondary }}
      </a>
    </div>
  </form>
</template>

<script setup lang="ts">
// Components
import { AppBaseFormGroup } from '@/app/components/base';

// Composables
import { useBindStateForm, useListenerForm } from '@/app/composables';

// Interfaces
import { IPropsAuthenticationForm, IProvideAuthentication } from '../interfaces';

// Vue
import { inject } from 'vue';

/**
 * @description Define props with default values and interfaces
 */
const props = withDefaults(defineProps<IPropsAuthenticationForm>(), {
  type: 'login',
  textBtnPrimary: 'Sign In',
  textBtnSecondary: 'Create New Account',
  urlBtnSecondary: '/register',
});

/**
 * @description Destructure all the data and methods what we need
 */
const { authentication_formData, authentication_formValidations, authentication_onSubmit } =
  inject<IProvideAuthentication>(props.type === 'login' ? 'authentication_login' : 'authentication_register')!;
</script>
