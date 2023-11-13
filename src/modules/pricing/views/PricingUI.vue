<template>
  <section id="pricing">
    <div class="relative overflow-hidden bg-white">
      <div class="mx-auto">
        <div class="flex flex-col items-center w-full sm:justify-center sm:pt-0">
          <PricingHeader />
          <PricingContent />
          <PricingBenefits />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Components
import PricingBenefits from '../components/PricingBenefits.vue';
import PricingContent from '../components/PricingContent.vue';
import PricingHeader from '../components/PricingHeader.vue';

// Services
import { usePricingService } from '../services/usePricing.service';

// Vue
import { provide } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const { pricing_isLoading, pricing_listOfBenefits, pricing_listOfPlans, pricing_onSubmit, pricing_userData } =
  usePricingService();

/**
 * @description Provide the data and methods to the child components
 */
provide('pricing', {
  pricing_isLoading,
  pricing_listOfBenefits,
  pricing_listOfPlans,
  pricing_onSubmit,
  pricing_userData,
});
</script>
