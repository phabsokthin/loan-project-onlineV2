<template>
  <div class="w-full min-h-screen back_image flex items-center justify-center px-4">
    <!-- Loan Card -->
    <div
      class="w-full max-w-lg lg:max-w-2xl bg-black/30 rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 text-white mb-5"
    >
      <!-- Header -->
      <div class="text-center mb-6 lg:mb-8">
        <h2 class="text-xl lg:text-2xl font-bold">Apply Now</h2>
        <p class="text-sm lg:text-base opacity-80">
          Apply from PHP 200,000 up to PHP 5,000,000
        </p>
      </div>

      <!-- Loan Amount -->
      <div class="mb-6 lg:mb-8">
        <label class="block text-sm lg:text-base mb-2">Enter Loan Amount</label>
        <div class="flex items-center bg-gray-800 rounded-lg px-3 py-2 lg:py-3">
          <input
            v-model="loanAmount"
            type="number"
            min="200000"
            max="5000000"
            step="10000"
            class="flex-1 bg-transparent text-white text-lg lg:text-xl focus:outline-none"
          />
          <span class="ml-2 text-gray-300 text-lg">₱</span>
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
        <p class="text-sm lg:text-base mb-2">Choose Installment period</p>
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
      <div class="rounded-lg p-4 lg:p-6 mb-6 text-sm lg:text-base space-y-2">
        <p class="font-semibold mb-2">Details:</p>
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
        class="w-full py-3 lg:py-4 rounded-md bg-yellow-500 font-bold text-black hover:bg-yellow-400 disabled:bg-gray-600 disabled:text-gray-300 text-base lg:text-lg transition"
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
