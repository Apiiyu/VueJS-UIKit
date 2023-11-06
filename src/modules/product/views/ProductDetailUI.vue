<template>
  <section id="product-detail" class="container p-2 mx-auto my-10 max-w-7xl">
    <div class="flex flex-row flex-wrap py-4">
      <MainProductDetail />
      <ProductInformation />
    </div>
  </section>
</template>

<script setup lang="ts">
// Components
import MainProductDetail from '../components/MainProductDetail.vue';
import ProductInformation from '../components/ProductInformation.vue';

// Services
import { useProductDetailService } from '../services/useProductDetail.service';

// Vue
import { provide } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const { productDetail_listOfBenefits, productDetail_listOfFeatures } = useProductDetailService();

/**
 * @description Provide the data and methods to the child components
 */
provide('product_detail', {
  productDetail_listOfBenefits,
  productDetail_listOfFeatures,
});
</script>
