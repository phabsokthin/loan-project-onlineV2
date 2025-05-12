<template>


    <!-- component -->
    <div class="z-50 flex items-center justify-center h-screen font-sans bg-gray-100">
        <div x-data="{ showPrivacyPolicy: true }">
            <!-- Button to open the privacy policy modal -->
            <!-- Privacy Policy Modal -->
            <div x-show="showPrivacyPolicy" class="fixed inset-0 z-10 flex items-center justify-center">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                <div class="relative w-full max-w-screen-md m-4 overflow-hidden bg-white rounded-lg shadow-xl"
                    x-transition:enter="transition ease-out duration-300 transform opacity-0 scale-95"
                    x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
                    x-transition:leave="transition ease-in duration-200 transform opacity-100 scale-100"
                    x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
                    x-cloak>
                    <!-- Modal panel -->
                    <div class="px-6 py-4">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Withdraw Loan </h3>
                    </div>

                    <div class="p-5 border-t-2 rounded-md bg-gray-50">

                        <div class="p-4 text-white bg-blue-600 rounded-md shadow-xl">
                            <div class="space-y-3">
                                <h1 class="flex justify-between font-mono text-xl">Loan Amount: <span><b>₱ {{
                                    currentData?.amount
                                            }}</b></span></h1>
                                <h1 class="flex justify-between font-mono text-xl">Loan Tearm: <span><b>{{
                                    currentData?.term }}
                                            Months</b></span></h1>

                                <h1 class="flex justify-between font-mono text-xl">Montly Payments: <span><b>₱ {{
                                    currentData?.monthlyPayment }}</b></span></h1>
                                <h1 class="flex justify-between font-mono text-xl">Interest: <span><b>₱ {{
                                    currentData?.totalInterest
                                            }}</b></span></h1>
                                <h1 class="flex justify-between font-mono text-xl">Loan Total & Interest: <span><b>₱ {{
                                    currentData?.totalPrincipalAndInterest }}</b></span></h1>
                                <!-- <h1 class="flex justify-between font-mono text-xl">Status:
                                    <span v-if="currentData.status === '0'"
                                        class="p-2 font-mono text-sm bg-orange-500 rounded-full">

                                        <p>Under Review</p>
                                    </span>
                                    <span v-else-if="currentData.status === '1'"
                                        class="p-2 font-mono text-sm bg-green-500 rounded-full">

                                        <p>Approved</p>
                                    </span>
                                    <span v-else class="p-2 font-mono text-sm bg-red-500 rounded-full">

                                        <p>Not Completed</p>
                                    </span>
                                </h1> -->

                            </div>

                        </div>
                    </div>
                    <div class="max-w-screen-md p-6 space-y-2 overflow-y-auto prose"
                        style="max-height: 70vh; background-color: #fff; border: 1px solid #e2e8f0; border-radius: 0.375rem; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);">
                        <div>
                            <label for="" class="mb-4 font-mono font-bold">WithDraw Amount (₱)</label>
                            <input class="w-full p-2 font-mono bg-gray-100 border rounded-md" readonly
                                placeholder="WithDraw Amount" v-model="amount" type="number">
                        </div>
                        <div>
                            <label for="" class="mb-4 font-mono font-bold">WithDraw Code: *</label>
                            <input class="w-full p-2 font-mono border rounded-md" 
                                placeholder="Width Draw" v-model="wcode" type="number">
                        </div>
                    </div>
                    <div class="flex flex-row justify-end gap-4 p-4 px-4 py-3 bg-gray-100 sm:px-6 align-items">
                        <button type="button" @click="handleClose"
                            class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm">
                            Close</button>

                        <button type="button" @click="handleAddCredit"
                            class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm">
                            Submit </button>
                    </div>



                </div>
            </div>
        </div>

    </div>

</template>

<script>
import useCollection from '@/firebase/useCollection'
import { onMounted } from 'vue'
import { ref } from 'vue'


export default {
    props: ['currentData'],
    setup(props, { emit }) {


        const amount = ref('')

        const { updateDocs } = useCollection("customers")


        onMounted(() => {
            if (props?.currentData) {
                amount.value = props?.currentData?.totalPrincipalAndInterest
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


        return { handleClose, handleAddCredit, amount }
    }
}

</script>