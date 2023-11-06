<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto">
      <div class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div class="w-full p-5 mx-auto md:max-w-4xl">
          <h2 class="mb-10 text-5xl font-bold text-center">
            <span class="block">Join & Get Our</span>
            <span class="block">Pro Benefits</span>
          </h2>
        </div>
        <div class="w-full p-5 mx-auto md:max-w-4xl">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="mx-auto md:mx-0">
              <AppBaseProductBenefits :benefits="authentication_productBenefits" orientation="vertical" />
            </div>

            <div>
              <AuthenticationForm
                type="register"
                text-btn-primary="Continue Sign Up"
                text-btn-secondary="Sign In"
                url-btn-secondary="/authentication/login"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import AuthenticationForm from '../components/AuthenticationForm.vue';

// Services
import { useAuthenticationRegisterService } from '../services/useAuthenticationRegister.service';

// Vue
import { provide } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const {
  authentication_formData,
  authentication_formValidations,
  authentication_onSubmit,
  authentication_productBenefits,
} = useAuthenticationRegisterService();

/**
 * @description Provide the data and methods to the child components
 */
provide('authentication_register', {
  authentication_formData,
  authentication_formValidations,
  authentication_onSubmit,
});
</script>
