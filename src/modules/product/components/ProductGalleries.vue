<template>
  <section id="product-galleries">
    <img :src="'/src/app/assets/images/' + imagePrimary" alt="" class="w-full mt-6 rounded-2xl" />
    <div class="grid grid-cols-4 gap-4 mt-4">
      <div
        v-for="(gallery, index) in galleries"
        class="overflow-hidden cursor-pointer rounded-2xl"
        :class="{ 'ring-2 ring-indigo-500': gallery.imageUri === imagePrimary }"
        :key="index"
        @click="onChangeImagePrimary(gallery.imageUri)"
      >
        <img :src="'/src/app/assets/images/' + gallery.imageUri" class="w-full h-full" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const imagePrimary = ref('gallery-1.png');
const galleries = ref([
  {
    id: 1,
    isActive: true,
    imageUri: 'gallery-1.png',
  },
  {
    id: 2,
    isActive: false,
    imageUri: 'gallery-2.png',
  },
  {
    id: 3,
    isActive: false,
    imageUri: 'gallery-3.png',
  },
  {
    id: 4,
    isActive: false,
    imageUri: 'gallery-4.png',
  },
]);

const onChangeImagePrimary = (imageUri: string) => {
  imagePrimary.value = imageUri;
};
</script>
