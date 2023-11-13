<template>
  <section id="product-galleries">
    <img :src="productDetail_imagePrimaryProduct" alt="" class="w-full mt-6 rounded-2xl" />
    <div class="grid grid-cols-4 gap-4 mt-4">
      <div
        v-for="(gallery, index) in productDetail_product.galleries"
        class="overflow-hidden cursor-pointer rounded-2xl"
        :class="{ 'ring-2 ring-indigo-500': gallery.url === productDetail_imagePrimaryProduct }"
        :key="index"
        @click="productDetail_onChangeImagePrimary(gallery.url)"
      >
        <img :src="gallery.url" class="w-full h-full" alt="" />
      </div>
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
const { productDetail_imagePrimaryProduct, productDetail_onChangeImagePrimary, productDetail_product } =
  inject<IProvideProductDetail>('product_detail')!;
</script>
