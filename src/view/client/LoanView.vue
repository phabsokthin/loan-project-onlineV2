<template>
    <div class="hidden lg:block">
        <NavbarComponent />
    </div>
    <div class="lg:hidden">
        <MobileView />
    </div>
    <form action="" @submit.prevent="submitLoan" v-motion-fade>
        <div class="w-full px-4 py-2 m-auto mt-2 bg-blue-700">
            <div class="max-w-4xl px-4 py-2 m-auto mt-2">
                <h2 class="flex items-center p-3 text-lg font-semibold text-white rounded-md">
                    <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L16 6L12 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M5 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 14L16 18L12 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    Enter the amount you need to borrow
                </h2>

                <input type="number" v-model="loanAmount"
                    class="w-full p-3 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Enter Amount money for borrow" min="15000" max="6000000" step="1000">

                <div class="grid grid-cols-2 gap-2">
                    <h2 class="p-3 text-lg font-semibold text-white">From: 150,000₱</h2>
                    <h2 class="p-3 font-semibold text-right text-white">Arrive: 60000000₱</h2>
                </div>
            </div>

            <!-- Loan Period Section -->
            <div class="max-w-4xl px-4 py-1 m-auto">
                <h2 class="flex items-center p-3 m-auto text-lg font-semibold text-white">
                    <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V12L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
                    </svg>
                    Loan Period
                </h2>
            </div>

            <!-- Loan Period Buttons -->
            <div class="grid w-full max-w-4xl grid-cols-3 gap-4 p-2 px-4 m-auto mt-1 bg-blue-700 rounded-md">

                <button type="button" @click="setLoanTerm(6)" :class="buttonClass(6)">6 months</button>
                <button type="button" @click="setLoanTerm(12)" :class="buttonClass(12)">12 months</button>
                <button type="button" @click="setLoanTerm(24)" :class="buttonClass(24)">24 months</button>
                <button type="button" @click="setLoanTerm(36)" :class="buttonClass(36)">36 months</button>
                <button type="button" @click="setLoanTerm(48)" :class="buttonClass(48)">48 months</button>
                <button type="button" @click="setLoanTerm(56)" :class="buttonClass(56)">56 months</button>

            </div>
        </div>

        <!-- Loan Information -->
        <div class="w-full max-w-4xl p-4 m-auto mt-4 bg-blue-700 rounded-lg">
            <h2 class="flex items-center justify-center p-3 text-4xl font-semibold text-white">
                Loan Information
            </h2>
            <div class="grid grid-cols-2 gap-4 p-3 mt-1">
                <span class="text-xl text-gray-300">Amount of money</span>
                <span class="text-right text-white">{{ formattedAmount }}₱</span>

                <span class="text-xl text-gray-300">Monthly interest rate</span>
                <span class="font-semibold text-right text-gray-300">{{ interestRate }}%</span>

                <span class="text-xl text-gray-300">Loan term</span>
                <span class="text-right text-gray-300">{{ loanTerm }} months</span>

                <span class="text-xl text-gray-300">Monthly Payments</span>
                <span class="font-semibold text-right text-gray-300">{{ monthlyPayment }}₱</span>

                <span class="text-xl text-gray-300">Total Interest</span>
                <span class="text-right text-gray-300">{{ totalInterest }}₱</span>

                <span class="text-xl text-gray-300">Total Principal & Interest</span>
                <span class="font-semibold text-right text-gray-300">{{ totalPrincipalAndInterest }}₱</span>

                <span class="text-xl text-gray-300">Disbursement date</span>
                <span class="font-semibold text-right text-gray-300">00/00/0000</span>
            </div>
        </div>


        <!-- Confirm Button -->
        <div class="flex justify-center col-span-2 mt-6">
            <button type="submit" :disabled="!isLoanValid || !agreedToTerms" @click.prevent="submitLoan"
                class="flex items-center justify-center w-full max-w-sm gap-3 py-3 text-blue-700 transition border border-blue-600 rounded-full shadow-md md:text-xl hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed">
                <span>Loan Confirm</span>
            </button>
        </div>



        <!-- Agreement Modal -->
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
            <div class="max-w-sm p-6 bg-white rounded-md shadow-lg">
                <div class="flex justify-center mb-4">
                    <svg class="w-10 h-10 text-orange-400" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L16 6L12 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M5 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 14L16 18L12 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <h2 class="mb-4 text-xl font-semibold text-center">Confirm!</h2>
                <p class="mb-6 text-center">Agree to borrow {{ formattedAmount }}P term {{ loanTerm }} months?</p>
                <div class="flex justify-between">
                    <button @click="showModal = true" class="px-4 py-2 text-white bg-red-500 rounded-md">Cancel</button>
                    <button @click="agreeLoan" class="px-4 py-2 text-white bg-green-500 rounded-md">Agree</button>
                </div>
            </div>
        </div>


        <!-- Agreement Checkbox -->
        <div class="grid justify-center col-span-2 mt-6 mb-40 text-center lg:mb-8">
            <label class="flex items-center justify-center p-2">
                <input type="checkbox" v-model="agreedToTerms" class="mr-2">
                Agree (User Service Agreement & Policy conditions)
            </label>
            <span class="p-2">Loans are risky, borrowing needs to be cautious.</span>
            <span class="p-2">Consume rationally and avoid overdue payments.</span>
        </div>
    </form>

    <!-- <IdentificationView/> -->

    <!-- <component :is="currentIndent"/> -->
</template>

<script>
import { ref, computed } from 'vue';
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import MobileView from './MobileView.vue';
// import IdentificationView from './IdentificationView.vue';
import { useRouter } from 'vue-router';

export default {
    components: {
        NavbarComponent,
        MobileView
        // IdentificationView
    },
    setup() {
        const loanAmount = ref(0);
        const interestRate = ref(0.5); // 0.5% monthly interest rate
        const loanTerm = ref(0);
        const showModal = ref(false);
        const agreedToTerms = ref(false);
        const allLoanValues = ref("")

        const currentIndent = ref("")

        const router = useRouter();

        const formattedAmount = computed(() => {
            return loanAmount.value.toLocaleString();
        });

        const monthlyPayment = computed(() => {
            if (!loanTerm.value || !loanAmount.value) return '0';
            const principal = loanAmount.value;
            const monthlyRate = interestRate.value / 100 / 12;
            const termMonths = loanTerm.value;

            const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
                (Math.pow(1 + monthlyRate, termMonths) - 1);

            return payment.toFixed(0).toLocaleString();
        });

        const totalInterest = computed(() => {
            if (!loanTerm.value || !loanAmount.value) return '0';
            const monthlyPay = parseFloat(monthlyPayment.value.replace(/,/g, ''));
            return (monthlyPay * loanTerm.value - loanAmount.value).toFixed(0).toLocaleString();
        });

        const totalPrincipalAndInterest = computed(() => {
            if (!loanTerm.value || !loanAmount.value) return '0';
            const monthlyPay = parseFloat(monthlyPayment.value.replace(/,/g, ''));
            return (monthlyPay * loanTerm.value).toFixed(0).toLocaleString();
        });

        const isLoanValid = computed(() => {
            return loanAmount.value >= 15000 &&
                loanAmount.value <= 6000000 &&
                loanTerm.value > 0;
        });

        const setLoanTerm = (months) => {
            loanTerm.value = months;
        };

        const buttonClass = (months) => {
            return loanTerm.value === months
                ? "font-medium text-white px-4 py-2 rounded-md bg-blue-500 p-3 flex items-center justify-center shadow-md"
                : "font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 bg-white p-3 flex items-center justify-center shadow-md";
        };

        const submitLoan = () => {
            if (!isLoanValid.value) {
                alert('Please enter a valid loan amount (15,000P - 6,000,000P) and select a loan term');
                return;
            }

            if (!agreedToTerms.value) {
                showModal.value = true;
                return;
            }

            processLoan();
        };

        const agreeLoan = () => {
            agreedToTerms.value = true;
            showModal.value = false;

            alert(totalPrincipalAndInterest.value);

            // console.log('Loan Agreement Confirmed:', {
            //     amount: loanAmount.value,
            //     formattedAmount: formattedAmount.value,
            //     term: loanTerm.value,
            //     interestRate: interestRate.value,
            //     monthlyPayment: monthlyPayment.value,
            //     totalInterest: totalInterest.value,
            //     totalPrincipalAndInterest: totalPrincipalAndInterest.value,
            //     createdAt: new Date().toISOString()
            // });
            processLoan();


        };

        const processLoan = () => {
            const data = {
                amount: loanAmount.value,
                term: loanTerm.value,
                interestRate: interestRate.value,
                monthlyPayment: monthlyPayment.value,
                totalInterest: totalInterest.value,
                totalPrincipalAndInterest: totalPrincipalAndInterest.value,
                createdAt: new Date().toISOString()
            };

            console.log('Loan request data:', data);


            router.push({
                path: "/identification",
                query: {
                   data: JSON.stringify(data)
                }
            });


            // alert(`Loan request submitted for ${formattedAmount.value}P for ${loanTerm.value} months`);
        };

        return {
            loanAmount,
            interestRate,
            loanTerm,
            showModal,
            agreedToTerms,
            formattedAmount,
            monthlyPayment,
            totalInterest,
            totalPrincipalAndInterest,
            isLoanValid,
            setLoanTerm,
            buttonClass,
            submitLoan,
            agreeLoan,
            allLoanValues,
            currentIndent
        };
    }
}
</script>

<style scoped>
.text-right {
    text-align: right;
}

.text-white {
    color: white;
}
</style>