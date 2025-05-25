<template>
    <div class="hidden lg:block">
        <NavbarComponent />
    </div>
    <div class="lg:hidden">
        <MobileView />
    </div>

    <div class="flex flex-col justify-start items-center  min-h-[100vh]">
        <div class="flex justify-center my-4">
            <div class="">
                <div class="flex items-center justify-center w-32 h-32 text-white bg-green-500 rounded-full shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-check-icon lucide-check">
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="mx-auto flex w-full  flex-col justify-center px-5 pt-0 md:h-[unset] max-w-[520px] lg:px-6 xl:pl-0 ">
            <div class="relative flex w-full flex-col pt-[20px] md:pt-0">
                <div
                    class="max-w-full px-6 pt-8 pb-6 mb-5 mr-0 border rounded-lg shadow-sm bg-card text-card-foreground h-min dark:border-zinc-800 md:mb-0 bg-[oklch(58.8%_0.158_241.966)] opacity-95">
                    <div class="relative mx-auto flex w-full max-w-full md:pt-[unset] mb-6">
                        <div class="w-2 h-2 mt-1 bg-green-500 rounded-full me-4"></div>
                        <div>
                            <p class="mb-1  font-medium text-white ">
                                Withdrawal request submitted.
                            </p>
                            <p class="font-medium text-zinc-500 dark:text-zinc-400">
                               
                            </p>
                        </div>
                    </div>
                    <div class="relative mx-auto flex w-full max-w-full md:pt-[unset] mb-6">
                        <div class="w-2 h-2 mt-1 bg-green-500 rounded-full me-4"></div>
                        <div>
                            <p class="mb-1  font-medium text-white">
                                System proccessing.
                            </p>
                            <!-- <p class="font-medium text-zinc-500 dark:text-zinc-400">
                                2 hours ago
                            </p> -->
                        </div>
                    </div>
                    <div class="relative mx-auto flex w-full max-w-full md:pt-[unset]">
                        <div class="w-2 h-2 mt-1 bg-gray-800 rounded-full me-4"></div>
                        <div>
                            <p class="mb-1  font-medium text-gray-300/90">
                                Withdrawal request successfull
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import MobileView from './MobileView.vue';

export default {
    components: {
        NavbarComponent,
        MobileView
    },
    setup() {

    }
}


</script>