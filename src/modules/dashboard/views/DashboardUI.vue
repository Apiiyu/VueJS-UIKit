<template>
  <section id="dashboard">
    <Hero />
    <TopCategories />
    <UIKitItems />
  </section>
</template>

<script setup lang="ts">
// Components
import Hero from '../components/Hero.vue';
import TopCategories from '../components/TopCategories.vue';
import UIKitItems from '../components/UIKitItems.vue';

// Services
import { useProductService } from '@/modules/product/services/useProduct.service';

// Vue
import { onMounted, provide } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const {
  product_fetchGetAllCategories,
  product_fetchGetAllProducts,
  product_listOfCategories,
  product_listOfProducts,
} = useProductService();

/**
 * @description Provide the data and methods to the child components
 */
provide('dashboard', {
  dashboard_listOfCategories: product_listOfCategories,
  dashboard_listOfProducts: product_listOfProducts,
});

/**
 * @description Lifecycle hook that is called after data-bound properties of a directive are initialized.
 */
onMounted(async () => {
  await Promise.all([product_fetchGetAllCategories(), product_fetchGetAllProducts()]);
});
</script>
