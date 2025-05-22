<template>
    <div class="px-6 mx-auto mt-4 text-gray-500 md:max-w-4xl">
        <swiper :spaceBetween="30" :pagination="{ clickable: true }" :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" :modules="modules" class="border rounded-md shadow-lg mySwiper">
            <swiper-slide v-for="slide in slides" :key="slide">
                <img  class=" w-full h-[300px] md:h-[400px]" :src="slide?.image" alt="Slide 1">
            </swiper-slide>
           

        </swiper>
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
    components: {
        Swiper,
        SwiperSlide,
    },
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
    background-color: #9b9999 !important;
    /* Change to your preferred color */
    opacity: 1;
    /* Make dots fully visible */
}

.swiper-pagination-bullet-active {
    background-color: #0c00e9 !important;
    /* Active dot color */
}
</style>
