<template>
    <div class="mx-auto ">
        <!-- component -->
        <section>
            <div class="">
                <div class="max-w-4xl px-6 mx-auto text-gray-500">
                    <div class="flex justify-center my-10">
                        <h2 class="flex items-center gap-1 text-2xl font-semibold text-gray-950 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="text-white lucide lucide-move-right">
                                <path d="M18 8L22 12L18 16" />
                                <path d="M2 12H22" />
                            </svg>
                            <!-- <span class="text-lg text-black md:text-2xl">Loan Processing</span> -->
                        </h2>

                    </div>
                    <!-- <div id="link_account" class="">
                        <div
                            class="relative p-8 overflow-hidden border rounded-md shadow-xl bg-[oklch(58.8%_0.158_241.966)] opacity-90 group">
                            <div aria-hidden="true"
                                class="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 to-white blur-2xl ">
                            </div>
                            <div
                                class="relative grid items-center justify-center grid-cols-1 lg:flex lg:justify-between">
                                <div
                                    class="mt-6 border-gray-200 rounded-full border-8 flex items-center justify-center w-[180px] h-[180px]">
                                    <div v-for="usDoc in userDoc" :key="usDoc" class="space-y-2 text-center">
                                        <h1 class="text-3xl text-white ">{{ usDoc?.credit }}</h1>
                                        <span class="text-white ">Meduim Credit</span>
                                    </div>
                                    <div v-if="!user">
                                        <span class="text-white "> No Meduim Credit</span>

                                    </div>
                                </div>

                                <div v-if="user">
                                    <div v-for="usDoc in userDoc" :key="usDoc"
                                        class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                        <div v-if="usDoc.accountNumber" class="space-y-3 text-xl text-white">
                                            <div v-if="usDoc.status === '0' || usDoc.status === '1'">
                                                <h1>Welcome!</h1>
                                                <h1>Account Number: {{ usDoc?.accountNumber }}</h1>
                                                <div class="space-y-2">
                                                    <h1>Account balance</h1>
                                                    <h1 v-if="usDoc.status === '1'" class="text-2xl font-bold">₱ {{ usDoc?.withDrawAmount }}</h1>
                                                     <h1 v-else class="text-2xl font-bold">₱ 0</h1>
                                                </div>
                                            </div>
                                            <h1 v-else class="text-xs text-white md:text-xl">No Account Number
                                            </h1>
                                        </div>
                                        <div v-else>
                                            <h1 class="text-xs text-white md:text-xl">No Account Number</h1>

                                        </div>
                                    </div>
                                </div>
                                <div v-else class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                    <div class="space-y-3 text-xl text-white">

                                        <h1>No Account Number</h1>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>


            <div class="flex justify-center my-10">
                <button @click="handleRequestLoan"
                    class="flex items-center gap-1 p-3 font-bold text-white bg-blue-600 rounded-full shadow-xl hover:bg-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-move-down">
                        <path d="M8 18L12 22L16 18" />
                        <path d="M12 2V22" />
                    </svg>

                    <div>
                        <div class="">Request loan</div>
                    </div>
                </button>
            </div>

            <!-- <div v-for="usDoc in userDoc" :key="usDoc" class="flex justify-center my-10">
                <div v-if="usDoc.amount === 0">
                    <button @click="handleRequestLoan"
                        class="flex items-center gap-1 p-3 font-bold text-white bg-blue-600 rounded-full shadow-xl hover:bg-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-move-down">
                            <path d="M8 18L12 22L16 18" />
                            <path d="M12 2V22" />
                        </svg>

                        <div>
                            <div class="uppercase">Request loan</div>
                        </div>
                    </button>
                </div>

                <div v-else>
                    <button @click="handleLoanInformationNext"
                        class="flex items-center gap-1 p-3 font-bold text-white bg-blue-600 rounded-full shadow-xl hover:bg-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-move-down">
                            <path d="M8 18L12 22L16 18" />
                            <path d="M12 2V22" />
                        </svg>
                   

                        <div>
                            <div class="uppercase">Your Loan Information</div>
                        </div>
                    </button>
                </div>
            </div> -->





            <div>
                <div class="flex justify-center my-10">
                    <h2 class="flex items-center gap-1 font-semibold text-black ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-move-right">
                            <path d="M18 8L22 12L18 16" />
                            <path d="M2 12H22" />
                        </svg>
                        <span class="text-lg md:text-2xl">Customer Received Loans </span>
                    </h2>
                </div>

                <div class="max-w-4xl px-6 mx-auto text-white">
                    <div
                        class="relative p-2 overflow-hidden bg-[oklch(58.8%_0.158_241.966)] opacity-95  border rounded-md border-gray-200 md:px-8 group ">
                        <div aria-hidden="true"
                            class="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b from-blue-500 to-white blur-2xl ">
                        </div>
                        <div class="relative flex items-center justify-between gap-2">


                            <div
                                class=" border-white rounded-full border-2 flex items-center justify-center w-12 h-12 md:w-[80px] md:h-[80px]">
                                <div class="space-y-2 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-hand-coins size-5 md:size-8">
                                        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                        <path
                                            d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                        <path d="m2 16 6 6" />
                                        <circle cx="16" cy="9" r="2.9" />
                                        <circle cx="6" cy="5" r="3" />
                                    </svg>
                                </div>
                            </div>

                            <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                <div class="space-y-3 text-xs text-white md:text-xl">
                                    <h1 v-if="user">{{ user?.email ? user.email.slice(0, 7) + '***' : '' }}</h1>
                                    <h1 v-else>No Account!</h1>
                                </div>
                            </div>

                            <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                <div class="space-y-3 text-xs text-white md:text-xl">
                                    <h1 class="text-white">Received Loans Amount </h1>

                                </div>
                            </div>
                            <div v-if="user">
                                <div v-for="usDoc in userDoc" :key="usDoc"
                                    class="mt-6 pb-6 rounded-b-[--card-border-radius]">

                                    <div v-if="usDoc.totalPrincipalAndInterest"
                                        class="space-y-3 text-xs text-white md:text-xl">
                                        <h1>₱ {{ usDoc?.totalPrincipalAndInterest }}</h1>
                                    </div>
                                    <div v-else>
                                        <h1 class="text-xs text-white md:text-xl">No Received Loans</h1>
                                    </div>
                                </div>

                            </div>
                            <div v-else>
                                <h1 class="text-xs text-white md:text-xl">No Received Loan</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>


    </div>
</template>

<script>

import getUser from '@/firebase/getUser';
import { useRouter } from 'vue-router';
import getCollectionQueryTerm from '@/firebase/getCollectionQueryTerm';
import { watch } from 'vue';
import { documentId, where } from 'firebase/firestore';
import { ref } from 'vue';
// import useCollection from '@/firebase/useCollection';


export default {
    setup() {
        const { user } = getUser()

        const router = useRouter()

        const userDoc = ref(null)

        // const { setDocs } = useCollection('customers')

        watch(
            () => user.value?.uid,
            async (newUid) => {
                if (newUid) {
                    const { documents } = await getCollectionQueryTerm('customers', where(documentId(), '==', newUid));
                    console.log("documents", documents);
                    watch(() => {
                        userDoc.value = documents.value || null;
                    })



                }
            },
            { immediate: true }
        );


        const handleRequestLoan = async () => {
            try {

                // const data = {
                //     status: 2,
                //     amount: 0,
                // }

                if (user.value) {
                    // await setDocs(data, user?.value?.uid)
                    router.push('/loan')
                }
                else {
                    router.push('/login')
                }
            }
            catch (err) {
                console.log(err)
            }
        }

        const handleLoanInformationNext = async () => {
            try {
                router.push('/loan')
            }
            catch (err) {
                console.log(err)
            }
        }


        return { user, handleRequestLoan, userDoc, handleLoanInformationNext }
    }
}

</script>