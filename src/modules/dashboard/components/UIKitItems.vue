<template>
  <section id="ui-kit-items" class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <UIItem
        v-for="item in 3"
        category="Mobile UI Kit"
        image-uri="items-1.jpg"
        link-to="details"
        title="Mobile UI Kit"
        :key="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// Components
import UIItem from './UIItem.vue';
</script>
