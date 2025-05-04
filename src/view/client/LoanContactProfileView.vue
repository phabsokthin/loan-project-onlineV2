<template>
    <div>
        <!-- Navbar -->
        <div class="hidden lg:block">
            <NavbarComponent />
        </div>
        <div class="bg-white lg:hidden">
            <MobileView />
        </div>

        <!-- Main Content -->
        <div class="w-full max-w-4xl px-1 m-auto mt-5 bg-white mb-9">
            <!-- Loan Info -->
            <h2
                class="flex items-center justify-center gap-2 p-3 text-lg font-semibold text-center text-white bg-blue-600 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-signature-icon lucide-signature">
                    <path
                        d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
                    <path d="M3 21h18" />
                </svg>
                <span>Signature</span>
            </h2>
            <div v-if="!showSuccess"
                class="w-full max-w-md p-6 mx-auto mt-8 mb-3 space-y-6 text-white rounded-md bg-gradient-to-r from-blue-500 to-indigo-600">
                <h2 class="mb-3 text-lg font-bold">Loan details</h2>
                <div v-for="usDoc in userDoc" :key="usDoc" class="space-y-2">
                    <div class="flex justify-between">
                        <p class="text-white">Loan amount</p>
                        <!-- <p class="font-medium">₱ {{ $props.data.amount }}</p> -->
                        <p class="font-medium">₱ {{ usDoc.amount }}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-white">Loan term</p>
                        <!-- <p class="font-medium">{{ $props.data.term }} months</p> -->
                        <p class="font-medium">{{ usDoc.term }} months</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-white">Contract</p>
                        <button class="font-bold text-white underline hover:text-yellow-200">View Contract</button>
                    </div>
                </div>
            </div>

            <!-- Signature Section -->
            <div v-if="!showSuccess" class="max-w-md p-4 mx-auto mb-40 rounded">


                <div>
                   

                    <div v-for="usDoc in userDoc" :key="usDoc" class="mt-2">

                        <div v-if="usDoc.assigned_image" class="">
                            <h1>Your Signature</h1>
                            <div class="flex items-center justify-center w-full h-40 border rounded">
                                <img :src="usDoc.assigned_image" alt="">
                            </div>


                        </div>
                        <div v-else>
                            <p class="text-gray-500">No signature available</p>

                        </div>
                    </div>

                </div>


                <!-- After Signature Confirmation -->
                <div v-if="signatureConfirmed" class="mt-4">
                    <button @click="agreeSignature"
                        class="w-full px-8 py-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">Agree</button>
                </div>
            </div>

            <!-- Success Message -->
          
        </div>


  


    </div>
</template>

<script>
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import MobileView from './MobileView.vue';
import useCollection from '@/firebase/useCollection';
import useStorage from '@/firebase/useStorage';
import getUser from '@/firebase/getUser';
import getCollectionQueryTerm from '@/firebase/getCollectionQueryTerm';
import { documentId, where } from 'firebase/firestore';
import { watch } from 'vue';

export default {
    components: {
        NavbarComponent,
        MobileView,
    },
    name: 'LoanContractView',
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            signaturePad: null,
            showSuccess: false,
            showModal: true,
            signatureConfirmed: false,
            userDoc: []
        };
    },


    mounted() {
        this.watchUser();

    },
    methods: {


        async watchUser() {
            const { user } = getUser();

            watch(() => user.value?.uid, async (newUid) => {
                if (newUid) {
                    const { documents } = await getCollectionQueryTerm('customers', where(documentId(), '==', newUid));


                    watch(() => documents, (newValue) => {
                        watch(() => newValue, (newDoc) => {
                            this.userDoc = newDoc.value || null;
                        }, { immediate: true });
                        console.log("User Document", newValue);
                        this.userDoc = newValue;
                    }, { immediate: true });

                    console.log("User Document", this.userDoc);
                }

            }, { immediate: true });
        },


        async agreeSignature() {
            if (this.signaturePad.isEmpty()) {
                alert('Please provide a signature first.');
                return;
            }

            const { user } = getUser();

            const { updateDocs } = useCollection('customers');
            const { uploadImage } = useStorage();

            try {
                const signatureData = this.signaturePad.toDataURL('image/png');
                const blob = await (await fetch(signatureData)).blob();
                const fileName = `signature_${Date.now()}.png`;
                const path = `signature_image/${fileName}`;

                const signatureUrl = await uploadImage(path, blob);

                const data = {

                    assigned_image: signatureUrl,
                    // amount: this.$props.data.amount,
                    // term: this.$props.data.term,
                    // monthlyPayment: this.$props.data.monthlyPayment,
                    // interestRate: this.$props.data.interestRate,
                    // totalInterest: this.$props.data.totalInterest,
                    // totalPrincipalAndInterest: this.$props.data.totalPrincipalAndInterest,

                    status: 0,
                }
                await updateDocs(user?.value?.uid, data);


                // alert('Your signature has been saved successfully!');
                this.showSuccess = true;

                // Optional: trigger download (if really needed)
                const downloadLink = document.createElement('a');
                downloadLink.href = signatureData;
                downloadLink.download = 'signature.png';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            } catch (error) {
                console.error("Error saving signature:", error);
                alert('There was an error saving your signature.');
            }
        },

        handleComplete() {
            this.$router.push({ name: 'complete' }); // ✅ Use `this.$router`
        },

        handleContact() {
            this.$router.push({ name: 'home' }); // ✅ Use `this.$router`
        }

    },
};
</script>



<style scoped>
canvas {
    touch-action: none;
}
</style>