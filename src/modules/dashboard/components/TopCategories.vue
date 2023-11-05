<template>
  <section id="top-categories" class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <CategoryItem
        v-for="item in 4"
        image-uri="categories-1.jpg"
        title="Mobile UI Kit"
        :total="729"
        :key="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// Components
import CategoryItem from './CategoryItem.vue';
</script>
