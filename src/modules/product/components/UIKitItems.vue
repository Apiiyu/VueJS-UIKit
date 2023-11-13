<template>
  <section id="ui-kit-items" class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <AppBaseProductUIItem
        v-for="(product, index) in product_listOfCategories?.products"
        :id="product?.id"
        :category="product?.category?.name"
        :image-uri="product?.thumbnails"
        :title="product?.name"
        :key="index"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// Interfaces
import { IProvideProductCategories } from '../interfaces';

// Vue
import { inject } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const { product_listOfCategories } = inject<IProvideProductCategories>('product_categories')!;
</script>
