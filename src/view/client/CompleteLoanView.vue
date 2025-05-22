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
        <div class="w-full max-w-4xl px-1 py-10 m-auto mt-1 mb-9">
            <!-- Loan Info -->



            <!-- Success Message -->
            <div class="max-w-md mx-auto mt-6 text-center bg-[oklch(58.8%_0.158_241.966)] opacity-95 p-4 rounded-md">
                <img :src="require('@/assets/success.webp')" alt="How to Sign" class="mx-auto mb-4">
                <h2 class="mb-2 text-xl font-bold text-white">✔ Congratulations</h2>
                <p class="text-white">Your loan application was successful, please wait for approval.</p>
                <button @click="handleContract" class="px-6 py-3 mt-4 text-white bg-blue-600 rounded-full shadow-lg">Contact Customer Service</button>
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
    methods: {
        handleContract(){
            this.$router.push({ name: 'home' });

        }
    }



};
</script>



<style scoped>
canvas {
    touch-action: none;
}
</style>