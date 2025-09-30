<template>
  <div>
    <!-- Navbar -->
    <div class="hidden lg:block">
      <NavbarComponent />
    </div>
    <div class="lg:hidden">
      <MobileView />
    </div>

    <!-- Main Container -->
    <div class="px-4 py-4 m-auto min-h-screen hero-image" v-motion-fade >
      <div class="w-full max-w-5xl mx-auto mt-10">
        <!-- Header -->
        <h2 class="flex items-center gap-2 p-3 text-lg font-semibold text-white bg-black rounded-t-md">
          <!-- Back Arrow Icon -->
          <svg
            class="w-6 h-6"
            viewBox="0 0 7111 7111"
            xmlns="http://www.w3.org/2000/svg"> <path d="m5000 7111c-179 0-346-69-472-195l-2888-2889c-260-260-260-683 0-943l2888-2889c260-260 683-260 943 0s260 683 0 943l-2417 2418 2417 2417c260 260 260 683 0 943-125 126-293 195-471 195z"
              fill="#ffffff"/>
          </svg>
          <span>Wallet</span>
        </h2>

        <!-- Balance Card -->
        <div class="relative  rounded-md overflow-hidden mt-5">
          <div
            class="relative p-6 bg-black/50 shadow-md rounded-md text-white"
          >
            <!-- Icon Top Left -->
            <div class="absolute top-3 left-3">
              <svg
                id="Layer_1"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
              >
                <path
                  d="m16.63997 5.20539-10.5599 10.5599c-2.21875-.14922-3.94674-1.98398-3.94674-4.22396v-4.69336c1.13073-1.02396 2.60273-1.64258 4.22409-1.64258zm32.44805 0h-4.5013l10.45325 10.45325v-4.47995c0-3.28541-2.66666-5.9733-5.95195-5.9733zm-22.95469-1.21602c-1.45065-1.45065-3.79727-1.45065-5.24792 0l-11.79739 11.79727h11.2l8.83203-8.81068zm14.22943 0c-1.45078-1.45065-3.81875-1.45065-5.2694 0l-11.79727 11.79727h28.86393zm7.06133 26.53867h13.6319c.23477 0 .4694.02135.70404.06393v-6.71992c0-3.28542-2.66666-5.95208-5.95195-5.95208h-49.42943c-3.51993 0-6.37865-2.85859-6.37865-6.37865v38.82669c0 5.9306 4.8 10.7306 10.73073 10.7306h45.07734c3.28529 0 5.95195-2.66667 5.95195-5.95195v-8.89596c-.23463.02135-.46927.04258-.70404.04258h-13.6319c-4.35208 0-7.89336-3.54128-7.89336-7.87201.00001-4.35195 3.54129-7.89323 7.89337-7.89323zm-.10677 6.84792c-.57591 0-1.02396.4694-1.02396 1.04531 0 .55469.44805 1.02409 1.02396 1.02409.55469 0 1.02409-.4694 1.02409-1.02409 0-.57591-.4694-1.04531-1.02409-1.04531zm16.68268-1.79193v5.65326c0 1.62135-1.32265 2.92266-2.94401 2.92266h-13.6319c-1.6 0-3.02943-.63998-4.07474-1.68529s-1.68529-2.47461-1.68529-4.07461c0-3.17878 2.58125-5.73867 5.76003-5.73867h13.6319c1.62136 0 2.94401 1.3013 2.94401 2.92265zm-13.52526 2.83724c0-1.74922-1.42943-3.17865-3.15742-3.17865-1.74935 0-3.15729 1.42943-3.15729 3.17865 0 1.72813 1.40794 3.15742 3.15729 3.15742 1.72799 0 3.15742-1.42929 3.15742-3.15742z"
                  fill="#ffffff"
                />
              </svg>
            </div>

            <!-- Content Center -->
            <div class="flex flex-col items-center">
              <p class="text-sm opacity-90">Current balance:</p>
              <div>
                <h1 class="text-3xl font-bold">₱200,000.00</h1>
              </div>
              <p class="mt-1 text-xs opacity-80">
                Repayment Period: 48 Months
              </p>
            </div>
          </div>
        </div>

        <!-- Loan Card -->
        <div class="relative rounded-md overflow-hidden mt-5">
          <div class="relative p-4 bg-black/50 rounded-md text-white">
            <div class="flex justify-between mb-2">
              <p class="text-sm font-medium">Loan Number:</p>
              <span>175741244212933</span>
            </div>
            <div class="flex justify-between">
              <p class="text-sm font-medium">Order Status:</p>
              <span class="text-green-400 font-semibold">Approved</span>
            </div>
          </div>
        </div>

        <!-- Description Card -->
        <div class="relative mt-5 rounded-md overflow-hidden ">
          <div class="relative p-4 bg-black/50 rounded-md text-white">
            <p class="text-sm font-semibold mb-1">Description:</p>
            <p class="text-sm leading-relaxed">
              Congratulations, Your loan application has been approved by
              Department of Finance.
            </p>
          </div>
        </div>

        <!-- Withdraw Button -->
        <div class="flex justify-center mx-auto my-6">
          <button
            @click="handleWidthModal()"
            class="w-40 p-2 font-bold text-white rounded-lg shadow-xl bg-[#5A7135] hover:bg-[#4A5E2A] text-center"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>

    <component
      :is="currentComponents"
      :currentData="currentData"
      @close="currentComponents = ''"
    />
  </div>
</template>

<script>
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import MobileView from './MobileView.vue';
import { watch, ref } from 'vue';
import getUser from '@/firebase/getUser';
import getCollectionQueryTerm from '@/firebase/getCollectionQueryTerm';
import { documentId, where } from 'firebase/firestore';
import WidthDrawModal from '@/components/admin/WithDrawLoanModal.vue';

export default {
  components: {
    NavbarComponent,
    MobileView,
    WidthDrawModal,
  },
  setup() {
    const userDoc = ref(null);
    const { user } = getUser();

    const currentComponents = ref('');
    const currentData = ref(null);

    watch(
      () => user.value?.uid,
      async (newUid) => {
        if (newUid) {
          const { documents } = await getCollectionQueryTerm(
            'customers',
            where(documentId(), '==', newUid)
          );
          watch(() => {
            userDoc.value = documents.value || null;
          });
        }
      },
      { immediate: true }
    );

    const handleWidthModal = (item) => {
      currentComponents.value = 'WidthDrawModal';
      currentData.value = item;
    };

    return {
      userDoc,
      handleWidthModal,
      currentComponents,
      currentData,
    };
  },
};
</script>

<style scoped>
.hero-image {
  background-image: url('/src/assets/background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
</style>
