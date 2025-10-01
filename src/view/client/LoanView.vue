<template>
  <div class="min-h-screen px-4 py-5 space-y-4 back_image">
    
  
       <div class="w-full max-w-4xl mx-auto mt-10">
      <!-- Header -->
      <h2 class="flex items-center gap-2 p-3 mt-10 text-lg font-semibold text-white bg-black rounded-t-md">
       <RouterLink :to="{ name: 'home' }">
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
       </RouterLink>
        <span>Personal Profile</span>
      </h2>
    </div>
    <!-- Loan Card -->
    <div
      class="w-full max-w-4xl p-6 mx-auto mb-5 text-white shadow-lg bg-black/30 rounded-xl sm:p-8 lg:p-10"
    >

    
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
          <input
            v-model="loanAmount"
            type="number"
            min="200000"
            max="5000000"
            step="10000"
            class="flex-1 text-lg text-white bg-transparent lg:text-xl focus:outline-none"
          />
          <span class="ml-2 text-lg text-gray-300">₱</span>
        </div>
        <!-- Slider -->
        <input
          type="range"
          min="200000"
          max="5000000"
          step="10000"
          v-model="loanAmount"
          class="w-full mt-3 accent-yellow-500"
        />
      </div>

      <!-- Installment Period -->
      <div class="mb-6 lg:mb-8">
        <p class="mb-2 text-sm lg:text-base">Choose Installment period</p>
        <div class="grid grid-cols-3 gap-3">
          <button
            v-for="m in [6, 12, 24, 36, 48, 60]"
            :key="m"
            type="button"
            @click="setLoanTerm(m)"
            :class="[
              'py-3 lg:py-4 rounded-md font-semibold text-sm lg:text-base transition',
              loanTerm === m
                ? 'bg-yellow-500 text-black'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            ]"
          >
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
      <button
        @click="submitLoan"
        :disabled="isLoanding"
        class="w-full py-3 text-base font-bold text-black transition bg-yellow-500 rounded-md lg:py-4 hover:bg-yellow-400 disabled:bg-gray-600 disabled:text-gray-300 lg:text-lg"
      >
        {{ isLoanding ? "Processing..." : "Apply Now" }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const loanAmount = ref(200000);
    const loanTerm = ref(6);
    const interestRate = ref(0.3);
    const isLoanding = ref(false);

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

    const submitLoan = () => {
      isLoanding.value = true;
      setTimeout(() => {
        isLoanding.value = false;
        alert(
          `Loan applied: ₱${formatNumber(
            loanAmount.value
          )} for ${loanTerm.value} months`
        );
      }, 2000);
    };

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
