<template>
  <section id="ui-items" class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <RouterLink :to="{ name: 'productDetail', params: { id } }" custom v-slot="{ href, navigate }">
        <a :href="href" @click="navigate">
          <div class="m-4 overflow-hidden rounded-xl">
            <img alt="Placeholder" class="block w-full h-auto" :src="imageUri" />
          </div>
        </a>
      </RouterLink>

      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <RouterLink :to="{ name: 'productDetail', params: { id } }" custom v-slot="{ href, navigate }">
            <a :href="href" class="font-semibold text-black no-underline hover:underline" @click="navigate">
              {{ title }}
            </a>
          </RouterLink>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline"> {{ category }} </span>
      </header>
    </div>
  </section>
</template>

<script setup lang="ts">
interface IPropsUIItem {
  id: number;
  category: string;
  imageUri: string;
  title: string;
}

withDefaults(defineProps<IPropsUIItem>(), {
  id: 1,
  category: 'Mobile UI Kit',
  imageUri: '@/app/assets/images/items-1.jpg',
  title: 'Mobile UI Kit',
});
</script>
