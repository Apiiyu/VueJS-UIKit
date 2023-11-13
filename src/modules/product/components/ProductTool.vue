<template>
  <section id="product-tool">
    <div v-if="productDetail_product.is_figma === 1" class="mb-4">
      <div class="flex mb-2">
        <div>
          <img src="@/app/assets/images/icon-figma.png" alt="" class="w-16" />
        </div>
        <div class="block mt-1 ml-4">
          <h3 class="font-semibold text-md">Figma</h3>
          <p class="text-gray-400 text-md">Project Included</p>
        </div>
      </div>
    </div>

    <div v-if="productDetail_product.is_sketch === 1" class="mb-4">
      <div class="flex mb-2">
        <div>
          <img src="@/app/assets/images/icon-sketch.png" alt="" class="w-16" />
        </div>
        <div class="block mt-1 ml-4">
          <h3 class="font-semibold text-md">Sketch</h3>
          <p class="text-gray-400 text-md">Project Included</p>
        </div>
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
const { productDetail_product } = inject<IProvideProductDetail>('product_detail')!;
</script>
