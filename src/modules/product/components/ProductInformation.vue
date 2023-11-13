<template>
  <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
    <div class="sticky top-0 w-full pt-4 md:mt-24">
      <div class="p-6 border rounded-2xl">
        <ProductTool />
        <ListOfFeatures />

        <template v-if="productDetail_userData?.subscription.length > 0">
          <a
            download=""
            :href="productDetail_product.file"
            class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
          >
            Download Now
          </a>
        </template>

        <template v-else>
          <RouterLink
            :to="{ name: productDetail_userData ? 'pricing' : 'login' }"
            custom
            v-slot="{ href, navigate }"
          >
            <a
              :href="href"
              class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
              @click="navigate"
            >
              Subscribe
            </a>
          </RouterLink>
        </template>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
// Components
import ListOfFeatures from './ListOfFeatures.vue';
import ProductTool from './ProductTool.vue';

// Interfaces
import { IProvideProductDetail } from '../interfaces';

// Vue
import { inject } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const { productDetail_product, productDetail_userData } = inject<IProvideProductDetail>('product_detail')!;
</script>
