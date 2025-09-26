<template>
    <div class="mx-auto ">
        <!-- component -->
        <section>
            <div class="flex justify-center  mx-auto my-5">
                <button @click="handleRequestLoan"
                    class="w-40 p-2 font-bold text-white rounded-lg shadow-xl bg-[#5A7135] hover:bg-[#4A5E2A] text-center">
                    <div>
                        <div class="">Apply Now</div>
                    </div>
                </button>
            </div>

            <div>
                <div class="max-w-4xl px-6 mx-auto text-white">
                    <div
                        class="relative p-2 overflow-hidden bg-gray-800 opacity-45  border rounded-md  md:px-8 group ">
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

                        
                            <div v-if="user">
                                <div v-for="usDoc in userDoc" :key="usDoc"
                                    class="mt-6 pb-6 rounded-b-[--card-border-radius]">

                                    <div v-if="usDoc.totalPrincipalAndInterest"
                                        class="space-y-3 text-xs text-white md:text-xl">
                                        <h1>₱ {{ usDoc?.totalPrincipalAndInterest }}</h1>
                                    </div>
                                    <div v-else>
                                        <h1 class="text-xl text-white md:text-xl">No Received Loans</h1>
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
