<template>
  <section id="product-categories">
    <UIKitItems />
  </section>
</template>

<script setup lang="ts">
// Components
import UIKitItems from '../components/UIKitItems.vue';

// Services
import { useProductService } from '@/modules/product/services/useProduct.service';

// Vue
import { onMounted, provide } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const { product_fetchGetAllCategories, product_listOfCategories } = useProductService();

/**
 * @description Provide the data and methods to the child components
 */
provide('product_categories', {
  product_listOfCategories,
});

/**
 * @description Lifecycle hook that is called after data-bound properties of a directive are initialized.
 */
onMounted(async () => {
  await Promise.all([product_fetchGetAllCategories()]);
});
</script>
