<template>
  <div class="min-h-screen px-4 py-5 space-y-4 back_image">

    <div v-for="userData in userDoc" :key="userData" v-motion-fade>
      <div v-if="!userData.status === '1'">
        <div class="w-full max-w-4xl mx-auto mt-10">
          <!-- Header -->
          <h2 class="flex items-center gap-2 p-3 mt-10 text-lg font-semibold text-white bg-black rounded-t-md">
            <RouterLink :to="{ name: 'home' }">
              <svg class="w-6 h-6" viewBox="0 0 7111 7111" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m5000 7111c-179 0-346-69-472-195l-2888-2889c-260-260-260-683 0-943l2888-2889c260-260 683-260 943 0s260 683 0 943l-2417 2418 2417 2417c260 260 260 683 0 943-125 126-293 195-471 195z"
                  fill="#ffffff" />
              </svg>
            </RouterLink>
            <span>Loan Contract</span>
          </h2>
        </div>
        <!-- Loan Card -->
        <div class="w-full max-w-4xl p-6 mx-auto mb-5 text-white shadow-lg bg-black/30 rounded-xl sm:p-8 lg:p-10">
          <!-- Header -->
          <div class="mb-6 text-center lg:mb-8">
            <h2 class="text-xl font-bold lg:text-2xl">Apply Now</h2>
            <p class="text-sm lg:text-base opacity-80">
              Apply from PHP 200,000 up to PHP 5,000,000
            </p>
          </div>
          <!-- Loan Amount -->
          <div class="mb-6 lg:mb-8">
            <label class="block mb-2 text-sm lg:text-base">Enter Loan Amount</label>
            <div class="flex items-center px-3 py-2 bg-gray-800 rounded-lg lg:py-3">
              <input v-model="loanAmount" type="number" min="200000" max="5000000" step="10000"
                class="flex-1 text-lg text-white bg-transparent lg:text-xl focus:outline-none" />
              <span class="ml-2 text-lg text-gray-300">₱</span>
            </div>
            <!-- Slider -->
            <input type="range" min="150000" max="5000000" step="10000" v-model="loanAmount"
              class="w-full mt-3 accent-yellow-500" />
          </div>

          <!-- Installment Period -->
          <div class="mb-6 lg:mb-8">
            <p class="mb-2 text-sm lg:text-base">Choose Installment period</p>
            <div class="grid grid-cols-3 gap-3">
              <button v-for="m in [6, 12, 24, 36, 48, 60]" :key="m" type="button" @click="setLoanTerm(m)" :class="[
                'py-3 lg:py-4 rounded-md font-semibold text-sm lg:text-base transition',
                loanTerm === m
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              ]">
                {{ m }} Months
              </button>
            </div>
          </div>

          <!-- Loan Details -->
          <div class="p-4 mb-6 space-y-2 text-sm rounded-lg lg:p-6 lg:text-base">
            <p class="mb-2 font-semibold">Details:</p>
            <div class="flex justify-between">
              <span>Initial Loan Requested:</span>
              <span>₱{{ formatNumber(loanAmount) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Base Interest Rate:</span>
              <span>{{ interestRate }}%</span>
            </div>
            <div class="flex justify-between">
              <span>Base Interest:</span>
              <span>₱{{ baseInterest }}</span>
            </div>
            <div class="flex justify-between font-semibold">
              <span>Recurring Payment:</span>
              <span>₱{{ monthlyPayment }}</span>
            </div>
            <div class="flex justify-between">
              <span>Repayment Plan:</span>
              <span>{{ loanTerm || 0 }} Months</span>
            </div>
          </div>

          <!-- Apply Button -->
          <div v-for="userData in userDoc" :key="userData">
            <div v-if="userData.loan_completed === '1'">
              <button @click="submitLoan" :disabled="isLoanding"
                class="w-full py-3 text-base font-bold text-black transition bg-yellow-500 rounded-md lg:py-4 hover:bg-yellow-400 disabled:bg-gray-600 disabled:text-gray-300 lg:text-lg">
                {{ isLoanding ? "Processing..." : "Apply Now" }}
              </button>
            </div>
            <div v-else>
              <div
                class="w-full py-3 text-base text-center text-white transition bg-red-500 rounded-md cursor-pointer lg:py-4 text-whtie disabled:bg-gray-600 disabled:text-gray-300 lg:text-lg">
                Application unavailable. Please fill in all required information to proceed. <span>
                  <RouterLink class="text-blue-500 underline hover:text-blue-600" :to="{ name: 'profile' }">See more
                  </RouterLink>
                </span></div>
            </div>
          </div>

        </div>
      </div>
      <div v-else>
        <div class="w-full max-w-4xl mx-auto mt-10">
          <!-- Header -->
          <h2 class="flex items-center gap-2 p-3 mt-10 mb-5 text-lg font-semibold text-white bg-black rounded-t-md">
            <RouterLink :to="{ name: 'home' }">
              <svg class="w-6 h-6" viewBox="0 0 7111 7111" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m5000 7111c-179 0-346-69-472-195l-2888-2889c-260-260-260-683 0-943l2888-2889c260-260 683-260 943 0s260 683 0 943l-2417 2418 2417 2417c260 260 260 683 0 943-125 126-293 195-471 195z"
                  fill="#ffffff" />
              </svg>
            </RouterLink>
            <span>Loan Contract</span>
          </h2>
        </div>
        <!-- Loan Card -->
        <div class="w-full max-w-4xl p-6 mx-auto mb-5 text-white shadow-lg bg-black/30 rounded-xl sm:p-8 lg:p-10">
          <!-- Header -->
          <div class="mb-6 text-center lg:mb-8">
            <h2 class="text-xl font-bold lg:text-2xl">Apply Now</h2>
            <p class="text-sm lg:text-base opacity-80">
              Apply from PHP 200,000 up to PHP 5,000,000
            </p>
          </div>
          <!-- Loan Amount -->
          <div class="mb-6 lg:mb-8">
            <label class="block mb-2 text-sm lg:text-base">Enter Loan Amount</label>
            <div class="flex items-center px-3 py-2 bg-gray-800 rounded-lg lg:py-3">
              <input v-model="loanAmount" type="number" min="200000" max="5000000" step="10000"
                class="flex-1 text-lg text-white bg-transparent lg:text-xl focus:outline-none" />
              <span class="ml-2 text-lg text-gray-300">₱</span>
            </div>
            <!-- Slider -->
            <input type="range" min="200000" max="5000000" step="10000" v-model="loanAmount"
              class="w-full mt-3 accent-yellow-500" />
          </div>

          <!-- Installment Period -->
          <div class="mb-6 lg:mb-8">
            <p class="mb-2 text-sm lg:text-base">Choose Installment period</p>
            <div class="grid grid-cols-3 gap-3">
              <button v-for="m in [6, 12, 24, 36, 48, 60]" :key="m" type="button" @click="setLoanTerm(m)" :class="[
                'py-3 lg:py-4 rounded-md font-semibold text-sm lg:text-base transition',
                loanTerm === m
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              ]">
                {{ m }} Months
              </button>
            </div>
          </div>

          <!-- Loan Details -->
          <div class="p-4 mb-6 space-y-2 text-sm rounded-lg lg:p-6 lg:text-base">
            <p class="mb-2 font-semibold">Details:</p>
            <div class="flex justify-between">
              <span>Initial Loan Requested:</span>
              <span>₱{{ formatNumber(loanAmount) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Base Interest Rate:</span>
              <span>{{ userDoc.interestRate }}%</span>
            </div>
            <div class="flex justify-between">
              <span>Base Interest:</span>
              <span>₱{{ baseInterest }}</span>
            </div>
            <div class="flex justify-between font-semibold">
              <span>Recurring Payment:</span>
              <span>₱{{ monthlyPayment }}</span>
            </div>
            <div class="flex justify-between">
              <span>Repayment Plan:</span>
              <span>{{ loanTerm || 0 }} Months</span>
            </div>
          </div>

          <!-- Apply Button -->
          <div v-for="userData in userDoc" :key="userData">
            <div v-if="userData.status === '1'">
              <div :disabled="isLoanding"
                class="w-full py-3 text-base text-center text-white transition bg-green-500 rounded-md lg:py-4 disabled:bg-gray-600 lg:text-lg">
                Loan applied successfully. <span>
                  <RouterLink class="text-blue-500 underline hover:text-blue-600" :to="{ name: 'account' }">View
                    accounts
                  </RouterLink>
                </span>
              </div>
            </div>
            <div v-else-if="userData.loan_completed === '1'">
              <button @click="submitLoan" :disabled="isLoanding"
                class="w-full py-3 text-base font-bold text-black transition bg-yellow-500 rounded-md lg:py-4 hover:bg-yellow-400 disabled:bg-gray-600 disabled:text-gray-300 lg:text-lg">
                {{ isLoanding ? "Processing..." : "Apply Now" }}
              </button>
            </div>
            <div v-else>
              <div
                class="w-full py-3 text-base text-center text-white transition bg-red-500 rounded-md cursor-pointer lg:py-4 text-whtie disabled:bg-gray-600 disabled:text-gray-300 lg:text-lg">
                Application unavailable. Please fill in all required information to proceed. <span>
                  <RouterLink class="text-blue-500 underline hover:text-blue-600" :to="{ name: 'profile' }">See more
                  </RouterLink>
                </span></div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import getUser from '@/firebase/getUser';
import useCollection from '@/firebase/useCollection';


import getCollectionQueryTerm from "@/firebase/getCollectionQueryTerm";
import { documentId, where } from "firebase/firestore";
import { timestamp } from "@/config/config";

export default {
  setup() {
    const loanAmount = ref(150000);
    const loanTerm = ref(6);
    const interestRate = ref(0.3);
    const isLoanding = ref(false);

    const userDoc = ref(null);

    const { updateDocs } = useCollection('customers');
    const { user } = getUser();
    const baseInterest = computed(() =>
      ((loanAmount.value * interestRate.value) / 100).toFixed(2)
    );

    const monthlyPayment = computed(() => {
      if (!loanTerm.value) return "0";
      const principal =
        loanAmount.value + parseFloat(baseInterest.value || 0);
      return (principal / loanTerm.value).toFixed(2);
    });

    const setLoanTerm = (months) => {
      loanTerm.value = months;
    };

    const formatNumber = (num) =>
      new Intl.NumberFormat("en-PH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num);


    // const submitLoan = async () => {
    //   try {


    //     isLoanding.value = true;
    //     const updatedData = {
    //       loanAmount: loanAmount.value || 0,
    //       loanTerm: loanTerm.value || 0,
    //       interestRate: interestRate.value || 0,
    //       baseInterest: baseInterest.value || 0,
    //       monthlyPayment: monthlyPayment.value || 0,
    //       credit_score: 750,
    //       status: '1',
    //       createdAt: timestamp(),
    //       loan_acc: generateLoanAcc(),

    //     }
    //     await updateDocs(user?.value?.uid, updatedData);
    //     console.log(updatedData);

    //     // router.push({
    //     //   path: '/loancontect',
    //     //   query: { data: JSON.stringify(props.data) },
    //     // });
    //   } catch (err) {
    //     console.error(err);
    //   } finally {
    //     isLoanding.value = false;
    //   }
    // };

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const submitLoan = async () => {
      try {
        if (!window.confirm("Are you sure you want to apply for loan?")) {
          return;
        }

        isLoanding.value = true;

        // simulate delay (2s)
        await sleep(2000);

        const updatedData = {
          loanAmount: loanAmount.value || 0,
          loanTerm: loanTerm.value || 0,
          interestRate: interestRate.value || 0,
          baseInterest: baseInterest.value || 0,
          monthlyPayment: monthlyPayment.value || 0,
          credit_score: 750,
          status: "1",
          createdAt: timestamp(),
          loan_acc: generateLoanAcc(), // ✅ must return random/unique
        };

        await updateDocs(user?.value?.uid, updatedData);

      } catch (err) {
        console.error("Submit loan failed:", err);
      } finally {
        isLoanding.value = false;
      }
    };

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

          console.log("User Document", userDoc.value);
        }

      },
      { immediate: true }
    );


    function generateLoanAcc() {
      const prefix = "LN"; // you can customize prefix
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      return prefix + randomNum; // e.g. LN483920
    }


    return {
      loanAmount,
      loanTerm,
      interestRate,
      baseInterest,
      monthlyPayment,
      setLoanTerm,
      formatNumber,
      submitLoan,
      isLoanding,
      userDoc
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
}
</style>
