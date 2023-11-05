<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-center w-full mt-0 pt-6 sm:justify-center sm:mt-8 sm:pt-0">
        <div class="w-full p-5 mx-auto sm:max-w-md">
          <h2 class="mb-20 text-5xl font-bold text-center">Welcome Back</h2>

          <AuthenticationForm
            type="login"
            text-btn-primary="Sign In"
            text-btn-secondary="Create New Account"
            url-btn-secondary="/authentication/register"
          />
        </div>

        <div class="w-full mx-auto mt-20 sm:max-w-2xl">
          <img src="@/app/assets/images/brand-logo.svg" alt="" class="w-full px-10 md:px-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import AuthenticationForm from '../components/AuthenticationForm.vue';

// Services
import { useAuthenticationLoginService } from '../services/useAuthenticationLogin.service';

// Vue
import { provide } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const { authentication_formData, authentication_formValidations, authentication_onSubmit } =
  useAuthenticationLoginService();

/**
 * @description Provide the data and methods to the child components
 */
provide('authentication_login', {
  authentication_formData,
  authentication_formValidations,
  authentication_onSubmit,
});
</script>
