<template>
  <section id="top-categories" class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <CategoryItem
        v-for="(category, index) in (dashboard_listOfCategories as IResponseCategory[])"
        :id="category.id"
        :image-uri="category.thumbnails"
        :title="category.name"
        :total="category.products_count"
        :key="index"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// Components
import CategoryItem from './CategoryItem.vue';

// Interfaces
import { IResponseCategory } from '@/modules/product/interfaces';
import { IProvideDashboard } from '../interfaces';

// Vue
import { inject } from 'vue';

/**
 * @description Destructure all the data and methods what we need
 */
const { dashboard_listOfCategories } = inject<IProvideDashboard>('dashboard')!;
</script>
