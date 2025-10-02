<template>
  <div class="min-h-screen px-4 py-4 m-auto back_image">
    <div class="hidden lg:block">
      <NavbarComponent />
    </div>
    <div class="lg:hidden">
      <MobileView />
    </div>

    <div class="w-full max-w-5xl mx-auto mt-10">
      <!-- Header -->
      <h2 class="flex items-center gap-2 p-3 mt-10 text-lg font-semibold text-white bg-black rounded-t-md">
        <svg
          class="w-6 h-6"
          viewBox="0 0 7111 7111"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m5000 7111c-179 0-346-69-472-195l-2888-2889c-260-260-260-683 0-943l2888-2889c260-260 683-260 943 0s260 683 0 943l-2417 2418 2417 2417c260 260 260 683 0 943-125 126-293 195-471 195z"
            fill="#ffffff"
          />
        </svg>
        <span>Beneficiary Bank Details</span>
      </h2>
    </div>

    <!-- Card -->
    <div class="w-full max-w-5xl p-6 mx-auto mt-5 text-white shadow-lg bg-black/50 rounded-xl">
      <!-- Show Form if no bank data -->
      <form v-if="!userDoc?.bankName || !userDoc?.accountNumber"
        @submit.prevent="handleSubmitBaneFicicary"
        class="space-y-6"
      >
        <h2 class="flex items-center gap-2 text-xl font-semibold text-white rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 10l9-6 9 6v2H3v-2zM4 12h16v8H4v-8z" />
          </svg>
          <span>Beneficiary Bank Info</span>
        </h2>

        <div>
          <label class="block mb-1 text-sm">Bank Name</label>
          <input v-model="bankName" type="text" placeholder="Bank Name"
            class="w-full p-2 text-white bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400" />
        </div>

        <div>
          <label class="block mb-1 text-sm">Account Number</label>
          <input v-model="accountNumber" type="text" placeholder="Account Number"
            class="w-full p-2 text-white bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400" />
        </div>

        <!-- Submit -->
        <div class="pt-4">
          <button v-if="!isLoanding" type="submit"
            class="w-full py-3 font-semibold text-white transition bg-yellow-500 rounded-full hover:bg-yellow-600">
            Submit
          </button>
          <button v-else disabled type="button"
            class="w-full py-3 font-semibold text-gray-200 bg-gray-600 rounded-full cursor-not-allowed">
            Please wait...
          </button>
        </div>
      </form>

      <!-- Show Data if already exists -->
      <div v-else class="space-y-4">
        <p><strong>Bank Name:</strong> {{ userDoc.bankName }}</p>
        <p><strong>Account Number:</strong> {{ userDoc.accountNumber }}</p>

        <button @click="handleNextToAssign"
          class="w-full py-3 font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import MobileView from './MobileView.vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import getUser from '@/firebase/getUser';
import useCollection from '@/firebase/useCollection';
import getColectionQuryTerms from '@/firebase/getCollectionQueryTerm';
import { documentId, where } from 'firebase/firestore';

export default {
  components: { NavbarComponent, MobileView },
  name: 'BeneficiaryBankView',
  props: { data: { type: Object, required: true } },

  setup(props) {
    const bankName = ref('');
    const accountNumber = ref('');
    const userDoc = ref(null);
    const isLoanding = ref(false);

    const { user } = getUser();
    const { updateDocs } = useCollection('customers');
    const router = useRouter();

    // load data
    watch(
      () => user.value?.uid,
      async (newUid) => {
        if (newUid) {
          const { documents } = await getColectionQuryTerms(
            'customers',
            where(documentId(), '==', newUid)
          );
          watch(() => {
            userDoc.value = documents.value?.[0] || null;
          });
        }
      },
      { immediate: true }
    );

    // submit beneficiary bank details
    const handleSubmitBaneFicicary = async () => {
      try {
        isLoanding.value = true;
        const updatedData = {
          bankName: bankName.value,
          accountNumber: accountNumber.value,
          assigned_image: '',
        };
        await updateDocs(user?.value?.uid, updatedData);
        userDoc.value = updatedData;
        router.push({
          path: '/loancontect',
          query: { data: JSON.stringify(props.data) },
        });
      } catch (err) {
        console.error(err);
      } finally {
        isLoanding.value = false;
      }
    };

    const handleNextToAssign = () => {
      router.push({
        path: '/loancontect',
        query: { data: JSON.stringify(props.data) },
      });
    };

    return {
      bankName,
      accountNumber,
      userDoc,
      isLoanding,
      handleSubmitBaneFicicary,
      handleNextToAssign,
    };
  },
};
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
