<template>
  <section id="list-of-features">
    <h1 class="mt-5 mb-3 font-semibold text-md">Great Features</h1>

    <div class="flex flex-col gap-3 mb-8">
      <ProductFeature v-for="item in 4" :key="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
// Components
import ProductFeature from './ProductFeature.vue';
</script>
