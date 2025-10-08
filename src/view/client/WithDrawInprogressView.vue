<template>
    <div class="min-h-screen py-3 back_image">



        <!-- Container -->
        <div class="w-full max-w-2xl px-4 mx-auto mt-10">
            <!-- Header -->
            <h2 class="flex items-center gap-2 p-3 text-lg font-semibold text-white bg-black rounded-t-md">
                <RouterLink :to="{ name: 'home' }">
                    <svg class="w-6 h-6" viewBox="0 0 7111 7111" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m5000 7111c-179 0-346-69-472-195l-2888-2889c-260-260-260-683 0-943l2888-2889c260-260 683-260 943 0s260 683 0 943l-2417 2418 2417 2417c260 260 260 683 0 943-125 126-293 195-471 195z"
                            fill="#ffffff" />
                    </svg>
                </RouterLink>
                <span>Wallet </span>
            </h2>

            <!-- Card -->
            <div class="w-full max-w-2xl p-6 mt-5 ">
                <!-- Form -->
                <div class="">
                    <!-- Left side -->
                    <div class="w-full space-y-3 text-center">
                        <h1 class="text-4xl font-bold text-center text-white">Inprogress</h1>
                        <div>
                            <p class="text-white text-md">You will receive regular updates on the</p>
                            <p class="text-white text-md">Transfer status and will be notified as soon as</p>
                            <p class="text-white text-md">the funds are available.</p>
                        </div>

                        <div class="flex justify-center ">
                            <img src="https://cdn-icons-png.flaticon.com/512/4327/4327043.png" class="object-contain w-40" alt="">
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
    background-image: url("/src/assets/background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;

}
</style>
