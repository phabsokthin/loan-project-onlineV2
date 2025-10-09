<template>
  <div class="min-h-screen py-3 back_image">



    <!-- Container -->
    <div class="w-full max-w-2xl px-4 mx-auto mt-10" >
      <!-- Header -->
      <h2 class="flex items-center gap-2 p-3 text-lg font-semibold text-white bg-black border rounded-t-md">
        <button @click="$router.back()">
          <svg class="w-6 h-6" viewBox="0 0 7111 7111" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m5000 7111c-179 0-346-69-472-195l-2888-2889c-260-260-260-683 0-943l2888-2889c260-260 683-260 943 0s260 683 0 943l-2417 2418 2417 2417c260 260 260 683 0 943-125 126-293 195-471 195z"
              fill="#ffffff" />
          </svg>
        </button>
        <span>Wallet </span>
      </h2>

      <!-- Card -->
      <div class="w-full max-w-2xl p-6 mt-5 " v-motion-fade>
        <!-- Form -->
        <div class="">
          <!-- Left side -->
          <div class="w-full space-y-1 text-center">
            <h1 class="text-4xl font-bold text-center text-white">Delivered</h1>
            <div>
              <p class="text-white text-md">The system has successfully</p>
              <p class="text-white text-md">sent the funds to your beneficiary.</p>
            </div>
            <div class="flex justify-center ">
              <img src="https://img.icons8.com/?size=1200&id=63726&format=png" class="object-contain w-40" alt="">
            </div>
          </div>
        </div>

        <!-- If Data Exists -->

      </div>
    </div>
  </div>
</template>



<style scoped>
canvas {
  touch-action: none;
}

.back_image {
  background-image: url("/src/assets/images/2025-10-09\ 22.35.37.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

}
</style>
