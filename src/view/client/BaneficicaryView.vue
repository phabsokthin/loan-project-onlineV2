<template>
    <div class="hidden lg:block">
        <NavbarComponent />
    </div>
    <div class="lg:hidden">
        <MobileView />
    </div>
    <div class="w-full max-w-4xl px-1 py-10 m-auto mt-1 bg-white mb-9" v-motion-fade>
        <h2 class="p-3 text-lg font-semibold text-center text-white bg-blue-800 rounded-md">Bank Account</h2>
        <div v-for="usDoc in userDoc" :key="usDoc" class="flex items-center justify-between p-4 mt-4 bg-gray-100 rounded-lg">
            <form v-if="!usDoc.bankName || !usDoc.accountNumber" @submit.prevent="handleSubmitBaneFicicary" class="w-full p-8 space-y-6 bg-white rounded-xl">
                <h2 class="mb-6 text-2xl font-bold text-center">Baneficicary Bank Information</h2>
                <div class="grid grid-cols-1 gap-4">
                    <div class="relative">
                        <label class="flex items-center gap-2 mb-1 font-medium">
                            <!-- Bank Icon SVG -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 10l9-6 9 6v2H3v-2zM4 12h16v8H4v-8z" />
                            </svg>
                            Please enter your bank name
                        </label>
                        <input type="text" v-model="bankName" placeholder="Please fill in the information"
                            class="w-full p-2 pl-10 border rounded-lg" />
                    </div>
                    <div class="relative">
                        <label class="flex items-center gap-2 mb-1 font-medium">
                            <!-- Credit Card Icon SVG -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 10h16M4 14h6" />
                            </svg>
                            Please enter your bank number
                        </label>
                        <input type="text" v-model="accountNumber" placeholder="Please fill in the information"
                            class="w-full p-2 pl-10 border rounded-lg" />
                    </div>
                </div>

                <button type="submit"
                    class="flex items-center justify-center w-full gap-2 px-4 py-2 mt-6 font-semibold text-white transition-all rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Confirm
                </button>

            </form>

            <div v-else class="w-full p-8 space-y-6 bg-white rounded-xl">
                <h2 class="mb-6 text-2xl font-bold text-center">Baneficicary Bank Information</h2>
                <div class="grid grid-cols-1 gap-4">
                    <div class="relative">
                        <label class="flex items-center gap-2 mb-1 font-medium">
                            <!-- Bank Icon SVG -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 10l9-6 9 6v2H3v-2zM4 12h16v8H4v-8z" />
                            </svg>
                            Please enter your bank name
                        </label>
                        <div placeholder="Please fill in the information"
                            class="w-full p-2 pl-10 border rounded-lg bg-gray-50">{{ usDoc.bankName }}</div>
                    </div>
                    <div class="relative">
                        <label class="flex items-center gap-2 mb-1 font-medium">
                            <!-- Credit Card Icon SVG -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 10h16M4 14h6" />
                            </svg>
                            Please enter your bank number
                        </label>
                        <div placeholder="Please fill in the information"
                            class="w-full p-2 pl-10 border rounded-lg bg-gray-50">{{ usDoc.accountNumber }}</div>
                    </div>
                </div>

                <button @click="handleNextToAssign"
                    class="flex items-center justify-center w-full gap-2 px-4 py-2 mt-6 font-semibold text-white transition-all rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Next
                </button>

            </div>
        </div>


        <pre>{{ userDoc }}</pre>
    </div>
</template>
<script>
import NavbarComponent from '@/components/client/NavbarComponent.vue'
import MobileView from './MobileView.vue';
import { useRouter } from 'vue-router';
import getCollectionQueryTerm from '@/firebase/getCollectionQueryTerm';
import { documentId, where } from 'firebase/firestore';
import { watch } from 'vue';
import getUser from '@/firebase/getUser';
import { ref } from 'vue';
import useCollection from '@/firebase/useCollection';

export default {
    components: {
        NavbarComponent,
        MobileView,
    },
    name: 'BaneficicaryView',
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup(props) {

        const userDoc = ref(null);
        const bankName = ref("");
        const accountNumber = ref("");

        const router = useRouter();
        console.log("Loan Information Data V2", props.data);
        const { user } = getUser();
        const { updateDocs } = useCollection('customers');


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


        const handleSubmitBaneFicicary = async() => {
            alert("Bank information submitted successfully!");

            const data = {
               bankName:  bankName.value,
                accountNumber: accountNumber.value,
                assigned_image: '',
            };

            await updateDocs(user.value?.uid, data);

            router.push({
                path: '/loancontect',
                query: {
                    data: JSON.stringify(props.data)
                },

            });
        }

        const handleNextToAssign = () => {
            router.push({
                path: '/loancontect',
                query: {
                    data: JSON.stringify(props.data)
                },

            });
        }
        return {
            handleSubmitBaneFicicary,
            userDoc,
            bankName,
            accountNumber,
            handleNextToAssign
        }

    }



}
</script>
<style></style>