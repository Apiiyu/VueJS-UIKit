<template>
  <section id="product-benefit" class="mx-auto md:mx-0">
    <div class="flex gap-12" :class="[orientation === 'horizontal' ? 'flex-row' : 'flex-col']">
      <div class="flex flex-col gap-2" v-for="(benefit, index) in benefits" :key="index">
        <div class="flex items-center gap-4">
          <img :src="'/src/app/assets/icons/' + benefit.iconName" alt="icon" />
          <h3 class="inline-block text-lg font-semibold">{{ benefit.title }}</h3>
        </div>

        <p class="mt-2 text-lg text-gray-500">
          {{ benefit.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Interfaces
export interface IProductBenefit {
  description: string;
  iconName: string;
  title: string;
}

export interface IPropsProductBenefits {
  benefits: IProductBenefit[];
  orientation: 'horizontal' | 'vertical';
}

/**
 * @description Define props with default values and interfaces
 */
withDefaults(defineProps<IPropsProductBenefits>(), {
  orientation: 'horizontal',
});
</script>
