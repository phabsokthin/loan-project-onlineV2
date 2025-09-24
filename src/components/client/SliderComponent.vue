<template>
  <div class="px-4 mx-auto mt-4 md:max-w-4xl">
    <!-- Full Card -->
    <div class="bg-gray-800 bg-opacity-40 rounded-xl shadow-lg overflow-hidden">
      <!-- Profile Section -->
      <div class="flex items-center gap-4 p-4 border-b border-gray-200">
        <!-- Avatar -->
        <div class="w-12 h-12 flex items-center justify-center bg rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 15c2.486 0 4.797.635 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
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
