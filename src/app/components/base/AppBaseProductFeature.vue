<template>
  <section
    id="product-feature"
    class="flex items-center gap-3"
    :class="{ 'flex-row-reverse': iconPosition === 'left' }"
  >
    <p class="text-base w-full">{{ title }}</p>

    <img src="@/app/assets/images/icon-check.png" class="float-right w-5 mt-1" alt="" />
  </section>
</template>

<script setup lang="ts">
// Interfaces
interface IPropsProductFeature {
  title: string;
  iconPosition: 'left' | 'right';
}

/**
 * @description Define props with default values and interfaces
 */
withDefaults(defineProps<IPropsProductFeature>(), {
  title: 'Customizable layers',
  iconPosition: 'right',
});
</script>
