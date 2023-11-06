<template>
  <section id="pricing-content" class="w-full p-5 mx-auto mb-10 md:max-w-4xl">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
      <PricingCard
        v-for="(plan, index) in pricing_listOfPlans"
        :description="plan.description"
        :features="plan.features"
        :price="plan.price"
        :title="plan.title"
        :key="index"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// Components
import PricingCard from './PricingCard.vue';

// Interfaces
import { IProvidePricing } from '../interfaces';

// Vue
import { inject } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const { pricing_listOfPlans } = inject<IProvidePricing>('pricing')!;
</script>
