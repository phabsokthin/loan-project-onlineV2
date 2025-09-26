<template>
  <div class="px-4 mx-auto mt-4 md:max-w-4xl">
    <!-- Full Card -->
    <div class="bg-gray-800 bg-opacity-40 rounded-xl shadow-lg overflow-hidden">
      <!-- Profile Section -->
      <div class="flex items-center gap-4 p-4 border-b border-gray-200">
        <!-- Avatar -->
        <div class="w-12 h-12 flex items-center justify-center bg rounded-full">
          <svg height="300" viewBox="0 0 512 512" width="300" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><path d="m256 94.457031c-49.238281 0-89.300781 40.058594-89.300781 89.300781 0 49.238282 40.0625 89.296876 89.300781 89.296876s89.300781-40.058594 89.300781-89.296876c0-49.242187-40.0625-89.300781-89.300781-89.300781zm0 0" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m256 0c-141.160156 0-256 114.839844-256 256 0 65.3125 24.597656 124.976562 64.996094 170.253906 8.652344-37.992187 28.507812-72.65625 57.5-99.660156 20.347656-18.953125 44.15625-33.136719 69.890625-41.957031-33.4375-21.160157-55.6875-58.46875-55.6875-100.878907 0-65.785156 53.519531-119.300781 119.300781-119.300781s119.296875 53.515625 119.296875 119.300781c0 42.390626-22.230469 79.6875-55.644531 100.851563 27.875 9.546875 53.425781 25.398437 74.875 46.847656 26.207031 26.207031 44.300781 59.148438 52.457031 94.8125 40.414063-45.277343 65.015625-104.949219 65.015625-170.269531 0-141.160156-114.839844-256-256-256zm0 0" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m91.101562 451.648438c44.578126 37.632812 102.128907 60.351562 164.898438 60.351562s120.320312-22.722656 164.898438-60.351562c-4.105469-37.296876-20.867188-72.261719-47.582032-98.976563-31.34375-31.34375-73.007812-48.605469-117.316406-48.605469-84.390625 0-155.738281 64.378906-164.898438 147.582032zm0 0" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/></g></svg>
        </div>

        <!-- Info -->
        <div class="flex flex-col">
          <span class="font-semibold text-white text-lg">****2332</span>
          <span class="text-sm text-white">
            Loan Amount: <span class="font-bold text-white">200,000 PHP</span>
          </span>
        </div>
      </div>

      <!-- Slide Section -->
      <swiper
        :spaceBetween="0"
        :pagination="{ clickable: true }"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :modules="modules"
        class="mySwiper"
        >
        <!-- Use static image -->
        <swiper-slide>
            <div class="flex items-center justify-center bg-white h-40 md:h-64 rounded-md">
            <img
                class="w-full h-full object-cover rounded-md"
                src="@/assets/banner5.png" 
                alt="Loan Banner"
            />
            </div>
        </swiper-slide>
        </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import getCollection from '@/firebase/getCollection';
import { computed } from 'vue';

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const { document: allSlides } = getCollection("slides");

    const slides = computed(() => {
      return allSlides.value ? allSlides.value.filter(slide => slide.status === 1) : [];
    });

    return {
      modules: [Pagination, Autoplay],
      slides,
    };
  },
};
</script>

<style>
.swiper-pagination-bullet {
  background-color: #c4c4c4 !important;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #0c00e9 !important; /* Theme color */
}
</style>
