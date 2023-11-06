<template>
  <section id="pricing-benefits" class="w-full p-5 mx-auto my-10 md:max-w-7xl">
    <AppBaseProductBenefits
      aria-orientation="horizontal"
      orientation="horizontal"
      :benefits="pricing_listOfBenefits"
    />
  </section>
</template>

<script setup lang="ts">
// Interfaces
import { IProvidePricing } from '../interfaces';

// Vue
import { inject } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const { pricing_listOfBenefits } = inject<IProvidePricing>('pricing')!;
</script>
