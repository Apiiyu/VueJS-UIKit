<template>
  <section id="list-of-features">
    <h1 class="mt-5 mb-3 font-semibold text-md">Great Features</h1>

    <div class="flex flex-col gap-3 mb-8">
      <AppBaseProductFeature
        v-for="(feature, index) in productDetail_product.features"
        :title="feature"
        icon-position="right"
        :key="index"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// Interfaces
import { IProvideProductDetail } from '../interfaces';

// Vue
import { inject } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const { productDetail_product } = inject<IProvideProductDetail>('product_detail')!;
</script>
