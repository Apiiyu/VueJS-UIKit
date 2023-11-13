<template>
  <section id="main-product-detail" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
    <header class="flex flex-col gap-2">
      <h1 class="text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl">
        {{ productDetail_product.name }}
      </h1>
      <p class="text-gray-500">{{ productDetail_product.subtitle }}</p>
    </header>

    <ProductGalleries />
    <ProductDescription />
  </section>
</template>

<script setup lang="ts">
// Components
import ProductDescription from './ProductDescription.vue';
import ProductGalleries from './ProductGalleries.vue';

// Interfaces
import { IProvideProductDetail } from '../interfaces';

// Vue
import { inject } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const { productDetail_product } = inject<IProvideProductDetail>('product_detail')!;
</script>
