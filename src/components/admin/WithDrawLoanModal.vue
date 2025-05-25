<template>


    <!-- component -->
    <div class="z-50 flex items-center justify-center font-sans ">
        <div x-data="{ showPrivacyPolicy: true }">
            <!-- Button to open the privacy policy modal -->
            <!-- Privacy Policy Modal -->
            <form @submit.prevent="handleWithDrawCode" x-show="showPrivacyPolicy"
                class="fixed inset-0 z-50 flex items-center justify-center">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                <div class="relative w-full max-w-screen-md m-4 overflow-hidden bg-green-500 rounded-lg shadow-xl"
                    x-transition:enter="transition ease-out duration-300 transform opacity-0 scale-95"
                    x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
                    x-transition:leave="transition ease-in duration-200 transform opacity-100 scale-100"
                    x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
                    x-cloak>
                    <!-- Modal panel -->
                    <div class="px-6 py-4">
                        <h3 class="text-lg font-medium leading-6 text-white ">Withdraw Loan </h3>
                    </div>

                    <div class="p-5 border-t-2 ">

                        <div class="p-4 text-white bg-[oklch(58.8%_0.158_241.966)] opacity-95 rounded-md shadow-xl">
                            <div class="space-y-3">
                                <h1 class="flex justify-between text-xl">Loan Amount: <span><b>₱ {{
                                    currentData?.amount
                                            }}</b></span></h1>
                                <h1 class="flex justify-between text-xl">Loan Tearm: <span><b>{{
                                    currentData?.term }}
                                            Months</b></span></h1>

                                <h1 class="flex justify-between text-xl">Montly Payments: <span><b>₱ {{
                                    currentData?.monthlyPayment }}</b></span></h1>
                                <h1 class="flex justify-between text-xl">Interest: <span><b>₱ {{
                                    currentData?.totalInterest
                                            }}</b></span></h1>
                                <h1 class="flex justify-between text-xl">Loan Total & Interest: <span><b>₱ {{
                                    currentData?.totalPrincipalAndInterest }}</b></span></h1>


                            </div>

                        </div>
                    </div>
                    <div class="max-w-screen-md p-6 space-y-2 overflow-y-auto prose"
                        style="max-height: 70vh; background-color: #fff; border: 1px solid #e2e8f0; border-radius: 0.375rem; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);">
                        <div>
                            <label for="" class="mb-4 font-bold">WithDraw Amount (₱)</label>
                            <input required class="w-full p-2 bg-gray-100 border rounded-md" readonly
                                placeholder="WithDraw Amount" v-model="amount" type="number">
                        </div>
                        <div>
                            <label for="" class="mb-4 font-bold">WithDraw Code: *</label>
                            <input required class="w-full p-2 border rounded-md" placeholder="WithDraw Code"
                                v-model="wcode" type="text">
                        </div>
                    </div>

                    <div class="flex flex-row justify-end gap-4 p-4 px-4 py-3 bg-gray-100 sm:px-6 align-items">
                        <button type="button" @click="handleClose"
                            class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm">
                            Close</button>

                        <button v-if="!isLoanding" type="submit"
                            class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm">
                            Submit </button>
                        <button v-else disabled
                            class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-green-400 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm">
                            Submiting... </button>
                    </div>



                </div>
            </form>
        </div>

    </div>

</template>

<script>
import useCollection from '@/firebase/useCollection'
import { watch } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
import getUser from '@/firebase/getUser';
import getCollectionQueryTerm from '@/firebase/getCollectionQueryTerm';
import { documentId, where } from 'firebase/firestore';
import { useRouter } from 'vue-router';
import { timestamp } from '@/config/config';
export default {
    props: ['currentData'],
    setup(props, { emit }) {
        const { user } = getUser()

        const amount = ref('')
        const codeWithDraw = ref('')
        const router = useRouter()
        const isLoanding = ref(false)
        const { updateDocs } = useCollection("customers")
        const { setDocs } = useCollection("withdrawLoan")
        const { addcDocs } = useCollection("withdrawLoanHistory")

        const wcode = ref('')



        onMounted(() => {
            if (props?.currentData) {
                amount.value = props?.currentData?.withDrawAmount
            }
        })


        const handleClose = () => {
            emit('close')
        }



        const handleAddCredit = async () => {
            try {
                const data = {
                    credit: amount.value
                }
                if (props?.creditData) {
                    await updateDocs(props?.creditData?.id, data)
                    alert("Update Credit successfull!")
                    handleClose();
                }
                else {
                    await updateDocs(props?.creditData?.id, data)
                    alert("Add Credit successfull!")
                    handleClose();
                }
            }
            catch (err) {
                console.log(err)
            }
        }

        watch(
            () => user.value?.uid,
            async (newUid) => {
                if (newUid) {
                    const { documents } = await getCollectionQueryTerm('customers', where(documentId(), '==', newUid));
                    console.log("documents", documents);
                    watch(() => {
                        codeWithDraw.value = documents.value || null;
                    })



                }
            },
            { immediate: true }
        );

        const handleWithDrawCode = async () => {



            try {

                const data = {
                    withDrawAmount: amount.value,
                    codeWithdraw: wcode.value,
                    amount: props.currentData.amount,
                    status: '0', 
                    totalPrincipalAndInterest: props.currentData.totalPrincipalAndInterest,
                    monthlyPayment: props.currentData.monthlyPayment,
                    totalInterest: props.currentData.totalInterest,
                    interestRate: props.currentData.interestRate,
                    term: props.currentData.term,
                    ipAddress: props.currentData.ipAddress,
                    bankName: props.currentData.bankName,
                    accountNumber: props.currentData.accountNumber,
                    name: props.currentData.name,
                    contact: props.currentData.contact,
                    dob: props.currentData.dob,
                    gender: props.currentData.gender,
                    idNumber: props.currentData.idNumber,
                    job: props.currentData.job,
                    loanPurpose: props.currentData.loanPurpose,
                    relativeName: props.currentData.relativeName,
                    relativePhone: props.currentData.relativePhone,
                    selfie_image: props.currentData.selfie_image,
                    front_image: props.currentData.front_image,
                    back_image: props.currentData.back_image,
                    assigned_image: props.currentData.assigned_image,
                    createdAt: timestamp(),
                }

                 const dataHistory = {
                    userId: user.value?.uid,
                    withDrawAmount: amount.value,
                    codeWithdraw: wcode.value,
                    amount: props.currentData.amount,
                    status: '0', 
                    totalPrincipalAndInterest: props.currentData.totalPrincipalAndInterest,
                    monthlyPayment: props.currentData.monthlyPayment,
                    totalInterest: props.currentData.totalInterest,
                    interestRate: props.currentData.interestRate,
                    term: props.currentData.term,
                    ipAddress: props.currentData.ipAddress,
                    bankName: props.currentData.bankName,
                    accountNumber: props.currentData.accountNumber,
                    name: props.currentData.name,
                    contact: props.currentData.contact,
                    dob: props.currentData.dob,
                    gender: props.currentData.gender,
                    idNumber: props.currentData.idNumber,
                    job: props.currentData.job,
                    loanPurpose: props.currentData.loanPurpose,
                    relativeName: props.currentData.relativeName,
                    relativePhone: props.currentData.relativePhone,
                    selfie_image: props.currentData.selfie_image,
                    front_image: props.currentData.front_image,
                    back_image: props.currentData.back_image,
                    assigned_image: props.currentData.assigned_image,
                    createdAt: timestamp(),
                }

                const loanAmountData = {
                    withDrawAmount: 0,
                    codeWithdraw: '',
                }

                if (props.currentData.codeWithdraw === wcode.value) {
                    isLoanding.value = true

                    setTimeout(async () => {
                        isLoanding.value = false
                        await setDocs(data, props.currentData.id)
                        await updateDocs(props.currentData.id, loanAmountData)
                        await addcDocs(dataHistory)
                        router.push('/withDrawSuccess')

                    }, 2000)

                } else {
                    alert("Your code is not correct!")
                }
            } catch (err) {
                console.log(err)
            }
        }


        return { handleClose, handleAddCredit, amount, handleWithDrawCode, codeWithDraw, wcode, isLoanding }
    }
}

</script>