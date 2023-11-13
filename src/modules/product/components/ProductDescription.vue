<template>
  <section id="product-description">
    <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
    <div class="text-gray-500">
      <p class="pb-4 whitespace-pre-line">
        {{ productDetail_product.description }}
      </p>
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
