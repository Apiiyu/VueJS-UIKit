<template>
  <section id="pricing-card">
    <div class="p-8 border rounded-3xl">
      <h1 class="text-4xl font-semibold">
        {{
          useCurrencyFormat(price, {
            currency: 'IDR',
            minimumFractionDigits: 0,
            style: 'currency',
          })
        }}
        <span class="text-xl font-light text-gray-500">/month</span>
      </h1>
      <h2 class="text-lg font-semibold mt-7">{{ title }}</h2>
      <p class="mb-6 text-gray-500">{{ description }}</p>

      <AppBaseProductFeature
        v-for="(feature, index) in features"
        :key="index"
        :title="feature"
        icon-position="left"
        class="mb-3"
      />

      <a
        class="inline-flex items-center justify-center w-full mt-0 md:mt-8 px-8 py-3 text-base font-medium border border-transparent rounded-full md:py-2 md:text-md md:px-10 hover:shadow cursor-pointer"
        :class="[
          title === 'Gold Plan'
            ? 'text-white bg-indigo-600 hover:bg-indigo-700'
            : 'text-black bg-gray-200 hover:bg-gray-300',
        ]"
        @click="pricing_onSubmit(price)"
      >
        Checkout Now
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
// Composables
import { AppBaseProductFeature } from '@/app/components/base';
import { useCurrencyFormat } from '@/app/composables';

// Interfaces
import { IProvidePricing } from '../interfaces';
interface IPropsPricingCard {
  title: string;
  description: string;
  price: number;
  features: string[];
}

// Vue
import { inject } from 'vue';

/**
 * @description Define props with default values and interfaces
 */
withDefaults(defineProps<IPropsPricingCard>(), {
  title: 'Customizable layers',
  description: 'Suitable for new team',
  price: 2000,
});

/**
 * @description Destructure all the data and methods what we need
 */
const { pricing_onSubmit } = inject<IProvidePricing>('pricing')!;
</script>
