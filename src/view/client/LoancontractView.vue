<template>
<div >
    <!-- Navbar -->
    <div class="hidden lg:block">
      <NavbarComponent />
    </div>
    <div class="bg-white lg:hidden">
      <MobileView />
    </div>

    <!-- Main Content -->
    <div class="w-full max-w-4xl px-1 py-10 m-auto mt-1 bg-white mb-9" >
      <!-- Loan Info -->
      <h2 class="p-3 text-lg font-semibold text-center text-white bg-blue-600 rounded-md">Personal Information</h2>
      <div v-if="!showSuccess"
        class="w-full max-w-md p-6 mx-auto mt-8 mb-3 space-y-6 text-white rounded-md bg-gradient-to-r from-blue-500 to-indigo-600">
        <h2 class="mb-3 text-lg font-bold">Loan details</h2>
        <div class="space-y-2">
          <div class="flex justify-between">
            <p class="text-white">Loan amount</p>
            <p class="font-medium">₱ {{ $props.data.amount }}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-white">Loan term</p>
            <p class="font-medium">{{ $props.data.term }} months</p>
          </div>
          <div class="flex justify-between">
            <p class="text-white">Contract</p>
            <button class="font-bold text-white underline hover:text-yellow-200">View Contract</button>
          </div>
        </div>
      </div>

      <!-- Signature Section -->
      <div v-if="!showSuccess" class="max-w-md p-4 mx-auto mb-40 border rounded">
        <p class="mb-2 text-sm text-gray-600">
          ↓ Please sign within the dotted line, the signature must be standard, complete and clear
        </p>
        <canvas ref="signaturePad" class="w-full h-40 mb-2 border border-gray-300 rounded-md"></canvas>
        <div class="flex gap-2">
          <button v-if="!signatureConfirmed" @click="clearSignature"
            class="px-4 py-1 text-white bg-red-500 rounded ">Reset</button>
          <button v-if="!signatureConfirmed" @click="confirmSignature"
            class="px-4 py-1 text-white bg-blue-600 rounded">Signature confirmation</button>
        </div>

        <!-- After Signature Confirmation -->
        <div v-if="signatureConfirmed" class="mt-4">
          <button @click="agreeSignature"
            class="w-full px-8 py-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">Agree</button>
        </div>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccess" class="max-w-md mx-auto mt-6 text-center ">
        <img :src="require('@/assets/success.webp')" alt="How to Sign" class="mx-auto mb-4">
        <h2 class="mb-2 text-xl font-bold text-green-600">✔ Congratulations</h2>
        <p class="text-gray-700">Your loan application was successful, please wait for approval.</p>
        <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded">Contact Customer Service</button>
      </div>

      <!-- Bottom Bar: Contract Terminated -->
      <div v-if="signatureConfirmed && !showSuccess"
        class="fixed bottom-0 left-0 right-0 p-2 text-center text-white bg-gradient-to-r from-blue-500 to-indigo-600">
        Contract terminated
      </div>

      <!-- Modal for Signature Instruction -->
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999] h-screen">
        <div class="p-6 text-center bg-white rounded shadow-md">
          <img :src="require('@/assets/signature.avif')" alt="How to Sign" class="mx-auto mb-4">
          <button @click="showModal = false" class="px-4 py-1 text-white bg-blue-500 rounded">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignaturePad from 'signature_pad';
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
      showModal: true, // show the modal at start
      signatureConfirmed: false,
    };
  },
  mounted() {
    const canvas = this.$refs.signaturePad;
    this.signaturePad = new SignaturePad(canvas);

    console.log("Last Data here V2", this.$props.data);
  },
  methods: {
    clearSignature() {
      this.signaturePad.clear();
    },
    confirmSignature() {
      if (this.signaturePad.isEmpty()) {
        alert('Please provide a signature first.');
        return;
      }
      this.signatureConfirmed = true;
    },
    agreeSignature() {
      if (this.signaturePad.isEmpty()) {
        alert('Please provide a signature first.');
        return;
      }

      // Save signature as PNG
      const signatureData = this.signaturePad.toDataURL('image/png');

      // Create a download link
      const link = document.createElement('a');
      link.href = signatureData;
      link.download = 'signature.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show alert message
      alert('Your signature has been saved successfully!');



      // Proceed to show success message
      this.showSuccess = true;
    },
  },
};
</script>

<style scoped>
canvas {
  touch-action: none;
}
</style>