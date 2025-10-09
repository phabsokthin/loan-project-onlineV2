<template>
    <div class="min-h-screen back_image">


        <div class="w-full max-w-4xl px-4 py-6 mx-auto space-y-6" v-motion-fade>

            <h2 class="flex items-center gap-2 p-3 text-lg font-semibold text-white bg-black rounded-t-md">
                <!-- Back Arrow Icon -->
                <router-link :to="{ name: 'home' }" class="text-white hover:text-gray-200"> <svg class="w-6 h-6"
                        viewBox="0 0 7111 7111" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m5000 7111c-179 0-346-69-472-195l-2888-2889c-260-260-260-683 0-943l2888-2889c260-260 683-260 943 0s260 683 0 943l-2417 2418 2417 2417c260 260 260 683 0 943-125 126-293 195-471 195z"
                            fill="#ffffff" />
                    </svg></router-link>
                <span>Account</span>
            </h2>

            <!-- Account Card -->
            <div class="p-6 text-center text-white shadow-lg bg-black/30 rounded-xl">
                <div class="flex flex-col items-center">
                    <!-- User Icon -->
                    <div class="flex items-center justify-center w-20 h-20 mb-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 682.66669 682.66669"
                            class="text-white">
                            <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                                <g>
                                    <path d="M 20,256 C 20,125.661 125.661,20 256,20 
                       386.339,20 492,125.661 492,256 
                       492,386.339 386.339,492 256,492 
                       125.661,492 20,386.339 20,256 Z" stroke="currentColor" stroke-width="40" fill="none" />
                                    <circle cx="256" cy="333" r="76" stroke="currentColor" stroke-width="40"
                                        fill="none" />
                                    <path d="m 369.0391,136 c -23.499,28.689 -59.197,47 -99.174,47 
                       h -23.73 c -39.977,0 -75.675,-18.311 -99.174,-47" stroke="currentColor" stroke-width="40"
                                        fill="none" />
                                </g>
                            </g>
                        </svg>
                    </div>

                    <!-- User Info -->
                    <h3 class="text-lg font-semibold">Account</h3>
                   <p class="mt-1 text-xl font-bold">
  {{ user?.email && user.email.length > 10
      ? user.email.slice(0, 9) + "*"
      : user?.email  || "No account" }}
</p>

                </div>
            </div>

            <!-- Loan & Credit Score Card -->
            <div class="p-6 text-white shadow-lg bg-black/30 rounded-xl">
                <div class="flex flex-row items-center justify-between gap-6 lg:flex-row">
                    <!-- ✅ Credit Score -->
                    <div class="flex flex-col items-center lg:items-start">
                        <img :src="creditscore" alt="creditscore" class="h-16" />
                        <p class="mt-2 text-sm">
                            Credit Score:
                            <span class="font-bold">{{ userDoc?.[0]?.credit_score || 0 }}</span>
                        </p>
                    </div>

                    <!-- ✅ Loan Info -->
                    <div class="flex flex-col items-center space-y-3 text-center lg:items-end lg:text-right">
                        <!-- Loan Amount -->
                        <div class="flex items-center space-x-2">
                            <svg id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 text-white">
                                <path
                                    d="m16.6 5.2-10.6 10.6c-2.2-.1-3.9-2-3.9-4.2v-4.7c1.1-1 2.6-1.6 4.2-1.6zm32.5 0h-4.5l10.5 10.5v-4.5c0-3.3-2.7-6-6-6zm-22.9-1.2c-1.5-1.5-3.8-1.5-5.2 0l-11.8 11.8h11.2l8.8-8.8zm14.2 0c-1.5-1.5-3.8-1.5-5.3 0l-11.8 11.8h28.9zm7.1 26.6h13.6c.2 0 .5 0 .7.1v-6.7c0-3.3-2.7-6-6-6h-49.4c-3.5 0-6.4-2.9-6.4-6.4v38.8c0 5.9 4.8 10.7 10.7 10.7h45.1c3.3 0 6-2.7 6-6v-8.9c-.2 0-.5 0-.7 0h-13.6c-4.3 0-7.9-3.5-7.9-7.9s3.6-7.9 7.9-7.9zm-.1 6.8c-.6 0-1 .5-1 1s.4 1 1 1 1-.5 1-1-.5-1-1-1zm16.7-1.8v5.7c0 1.6-1.3 2.9-2.9 2.9h-13.6c-1.6 0-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1c0-3.2 2.6-5.7 5.8-5.7h13.6c1.6 0 2.9 1.3 2.9 2.9zm-13.5 2.8c0-1.7-1.4-3.2-3.2-3.2-1.7 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1.7 0 3.2-1.4 3.2-3.2z"
                                    fill="#ffffff" />
                            </svg>
                            <span class="text-lg font-bold">₱ {{ userDoc?.[0]?.loanAmount || 0 }}</span>
                        </div>

                        <!-- Installment Period -->
                        <div class="flex items-center space-x-2 text-sm opacity-80">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h8M8 11h8m-6 4h6M5 3h14a2 2 0 012 2v14a2 2 
                     0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                            </svg>
                            <span>Installment period: {{ userDoc?.[0]?.loanTerm || 0 }} months</span>
                        </div>
                    </div>
                </div>
            </div>

                <!-- <pre>{{ userDoc }}</pre> -->
        </div>
    </div>
</template>

<script setup>

import getUser from "@/firebase/getUser";
import { ref, watch } from "vue";
import getCollectionQueryTerm from "@/firebase/getCollectionQueryTerm";
import { documentId, where } from "firebase/firestore";

const creditscore = new URL("@/assets/Credit_Score.png", import.meta.url).href;


const { user } = getUser();
const userDoc = ref(null);

watch(
    () => user.value?.uid,
    async (newUid) => {
        if (newUid) {
            const { documents } = await getCollectionQueryTerm(
                "customers",
                where(documentId(), "==", newUid)
            );
            watch(() => {
                userDoc.value = documents.value || null;
            });
        }
    },
    { immediate: true }
);
</script>

<style scoped>
.back_image {
    background-image: url("/src/assets/background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
}
</style>
