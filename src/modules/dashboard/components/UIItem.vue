<template>
  <section id="ui-items" class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <a :href="linkTo">
        <div class="m-4 overflow-hidden rounded-xl">
          <img alt="Placeholder" class="block w-full h-auto" :src="'/src/app/assets/images/' + imageUri" />
        </div>
      </a>

      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <a class="font-semibold text-black no-underline hover:underline" href="#"> {{ title }} </a>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline"> {{ category }} </span>
      </header>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IPropsUIItem } from '../interfaces';

withDefaults(defineProps<IPropsUIItem>(), {
  category: 'Mobile UI Kit',
  imageUri: '@/app/assets/images/items-1.jpg',
  linkTo: 'details',
  title: 'Mobile UI Kit',
});
</script>
