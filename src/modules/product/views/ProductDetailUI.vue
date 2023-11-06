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
</script>
