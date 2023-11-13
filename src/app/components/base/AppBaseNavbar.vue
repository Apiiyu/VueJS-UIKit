<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
      <a href="/" class="flex items-center">
        <img src="@/app/assets/images/app-logo.svg" class="h-8 ml-3 sm:ml-0 sm:h-8" alt="App Logo" />
      </a>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto" id="mobile-menu-2">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-regular">
          <li v-for="(menu, index) in APP_MENUS" :key="index">
            <RouterLink :to="menu.path" custom v-slot="{ isActive, href, navigate }">
              <a
                :href="href"
                :class="{
                  'bg-indigo-600 md:bg-transparent dark:text-white text-white md:text-indigo-600':
                    isActive && !menu.path.includes('#'),
                }"
                class="block py-2 pl-3 pr-4 rounded border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:hover:text-indigo-600 transition-all ease-in-out duration-500"
                aria-current="page"
                @click="navigate"
                >{{ menu.name }}</a
              >
            </RouterLink>
          </li>
        </ul>
      </div>

      <section v-if="isShowUserProfile" id="user-profile" class="flex items-center gap-3">
        <p class="text-base text-[160442]">
          Hi, <span class="font-bold">{{ userData?.name }}</span>
        </p>

        <img
          class="w-12 h-12 p-1 rounded-full ring-2 ring-indigo-600 dark:ring-gray-500"
          :src="userData?.profile_photo_url"
          alt="Bordered avatar"
        />
      </section>

      <div class="btn-actions flex items-center gap-3 w-80" v-if="!isShowUserProfile && isShowButtonActions">
        <RouterLink :to="{ name: 'login' }" custom v-slot="{ href, navigate }">
          <a
            class="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-3 md:px-10 hover:shadow"
            :href="href"
            @click="navigate"
          >
            Sign In
          </a>
        </RouterLink>

        <RouterLink :to="{ name: 'register' }" custom v-slot="{ href, navigate }">
          <a
            class="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white bg-[#160442] border border-transparent rounded-full hover:bg-[navy] md:py-3 md:px-10 hover:shadow"
            :href="href"
            @click="navigate"
          >
            Sign Up
          </a>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Constants
import { APP_MENUS } from '@/app/constants';

// Composables
import { isShowButtonActions, isShowUserProfile, userData } from '@/app/composables';
</script>
