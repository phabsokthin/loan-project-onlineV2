<template>

    <div v-for="usDoc in userDoc" :key="usDoc"
        class="m-auto space-y-8 overflow-hidden divide-y divide-gray-200 h-[880px] overflow-y-scroll">
        <div class="space-y-8 divide-y divide-gray-200">
            <div class="p-5 bg-white border-t-2 rounded-md border-t-blue-500">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-user-round-search-icon lucide-user-round-search">
                        <circle cx="10" cy="8" r="5" />
                        <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                        <circle cx="18" cy="18" r="3" />
                        <path d="m22 22-1.9-1.9" />
                    </svg>
                    <h3 class="text-2xl font-medium leading-6 text-gray-900">Profile</h3>

                </div>


            </div>

            <form @submit.prevent="handleUpdate" class="p-5 pt-8 border-t-2 rounded-md bg-gray-50">
                <div>
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                </div>
                <div class="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">




                    <div class="sm:col-span-2">
                        <label class="block text-sm font-medium text-gray-700"> Actual Name </label>
                        <div class="mt-1">
                            <input v-model="name" required autocomplete="address-level2"
                                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="region" class="block text-sm font-medium text-gray-700"> Indentification Card No
                        </label>
                        <div class="mt-1">
                            <input v-model="idNumber" required autocomplete="address-level2"
                                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium text-gray-700"> Gender
                        </label>
                        <div class="mt-1">
                            <input v-model="gender" autocomplete="address-level2"
                                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">

                        </div>
                    </div>


                    <div class="sm:col-span-2">
                        <label for="city" class="block text-sm font-medium text-gray-700"> Current Job </label>
                        <div class="mt-1">
                            <input v-model="job" autocomplete="address-level2"
                                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="region" class="block text-sm font-medium text-gray-700"> Stable Income </label>
                        <div class="mt-1">
                            <input v-model="income" autocomplete="address-level2"
                                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium text-gray-700"> Loan Purpose
                        </label>
                        <div class="mt-1">
                            <input v-model="loanPurpose" autocomplete="address-level2"
                                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="region" class="block text-sm font-medium text-gray-700"> Current Address </label>
                        <div class="mt-1">
                            <input v-model="address" autocomplete="address-level2"
                                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium text-gray-700"> Name of Relative
                        </label>
                        <div class="mt-1">
                            <input v-model="relativeName" autocomplete="address-level2"
                                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="region" class="block text-sm font-medium text-gray-700"> Contact </label>
                        <div class="mt-1">
                            <input v-model="contact" autocomplete="address-level2"
                                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium text-gray-700"> Relative's Phone
                            Number
                        </label>
                        <div class="mt-1">
                            <input v-model="relativePhone" autocomplete="address-level2"
                                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                        </div>
                    </div>
                </div>
                <button
                    class="px-4 py-2 mt-5 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>
            </form>


            <!-- Indentification -->

            <div class="p-5 pt-8 border-t-2 rounded-md bg-gray-50">
                <div>
                    <h3 class="text-lg font-medium leading-6 text-gray-900">KYC Indentification</h3>
                    <!-- <p class="mt-1 text-sm text-gray-500">Check about customer's indentification make sure correct.</p> -->
                </div>
                <div class="mt-6">
                    <fieldset>
                        <legend class="text-base font-medium text-gray-900">Front-Image</legend>
                        <div class="mt-4 space-y-4">
                            <div class="relative flex items-start">

                                <div class="ml-3 text-sm">
                                    <img :src="usDoc?.front_image"
                                        class="object-contain w-full p-2 bg-white border h-52" alt="">

                                </div>
                            </div>

                        </div>
                    </fieldset>
                    <fieldset class="mt-6">
                        <div>
                            <legend class="text-base font-medium text-gray-900">Back-Image</legend>
                        </div>
                        <div class="mt-4 space-y-4">
                            <div class="relative flex items-start">

                                <div class="ml-3 text-sm">
                                    <img :src="usDoc?.back_image" class="object-contain w-full p-2 bg-white border h-52"
                                        alt="">
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="mt-6">
                        <div>
                            <legend class="text-base font-medium text-gray-900">Selfies-Image</legend>
                        </div>
                        <div class="mt-4 space-y-4">
                            <div class="relative flex items-start">

                                <div class="ml-3 text-sm">
                                    <img :src="usDoc?.selfie_image"
                                        class="object-contain w-full p-2 bg-white border h-52" alt="">
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>


            <!-- Baneficicary Bank information -->

            <form @submit.prevent="handleUpdateBank" class="p-5 pt-8 border-t-2 rounded-md bg-gray-50">
                <div>
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Baneficicary Bank Information</h3>
                </div>
                <div class="mt-6">

                    <fieldset class="mt-6">
                        <div>
                            <legend class="text-base font-medium text-gray-900">Bank Name</legend>
                        </div>
                        <div class="mt-4 space-y-4">
                            <div class="w-full">
                                <div class="mt-1">
                                    <input v-model="bankName" autocomplete="address-level2"
                                        class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                                </div>
                            </div>

                        </div>
                    </fieldset>
                    <fieldset class="mt-6">
                        <div>
                            <legend class="text-base font-medium text-gray-900">Bank Number</legend>
                        </div>
                        <div class="mt-4 space-y-4">
                            <div class="w-full">
                                <div class="mt-1">
                                    <input v-model="accountNumber" autocomplete="address-level2"
                                        class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div>
                                 <button
                    class="px-4 py-2 mt-5 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update Bank</button>

                </div>
            </form>


            <!-- Signature -->

            <div class="p-5 pt-8 border-t-2 rounded-md bg-gray-50">
                <div>
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Signature</h3>
                </div>
                <div class="mt-6">

                    <fieldset class="mt-6">
                        <div>
                            <legend class="text-base font-medium text-gray-900">Customer's Signature</legend>
                        </div>
                        <div class="mt-4 space-y-4">

                            <div class="ml-3 text-sm">
                                <img :src="usDoc?.assigned_image"
                                    class="object-contain p-2 bg-white border rounded-md h-52 w-52" alt="">
                            </div>
                        </div>
                    </fieldset>

                </div>
            </div>


            <!-- Loan Details -->

            <div class="p-5 pt-8 border-t-2 rounded-md bg-gray-50">
                <div>
                    <h3 class="text-2xl font-medium leading-6 text-gray-900">Loan Details</h3>
                </div>
                <div class="p-4 mt-6 text-white bg-blue-600 rounded-md shadow-xl">
                    <div class="space-y-3">
                        <h1 class="flex justify-between font-mono text-xl">Loan Amount: <span><b>₱ {{ usDoc?.amount
                                    }}</b></span></h1>
                        <h1 class="flex justify-between font-mono text-xl">Loan Tearm: <span><b>{{ usDoc?.term }}
                                    Months</b></span></h1>

                        <h1 class="flex justify-between font-mono text-xl">Montly Payments: <span><b>₱ {{
                            usDoc?.monthlyPayment }}</b></span></h1>
                        <h1 class="flex justify-between font-mono text-xl">Interest: <span><b>₱ {{ usDoc?.totalInterest
                                    }}</b></span></h1>
                        <h1 class="flex justify-between font-mono text-xl">Loan Total & Interest: <span><b>₱ {{
                            usDoc?.totalPrincipalAndInterest }}</b></span></h1>
                        <h1 class="flex justify-between font-mono text-xl">Status:
                            <span v-if="usDoc.status === '0'" class="p-2 font-mono text-sm bg-orange-500 rounded-full">

                                <p>Under Review</p>
                            </span>
                            <span v-else-if="usDoc.status === '1'"
                                class="p-2 font-mono text-sm bg-green-500 rounded-full">

                                <p>Approved</p>
                            </span>
                            <span v-else class="p-2 font-mono text-sm bg-red-500 rounded-full">

                                <p>Not Completed</p>
                            </span>



                        </h1>

                    </div>

                </div>
            </div>

        </div>

        <div class="pt-5">
            <div class="flex justify-end mb-20">
                <!-- <button type="button"
                    class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button> -->
                <!-- <RouterLink :to="{ name: 'customers' }"
                    class="inline-flex justify-center px-4 py-2 ml-3 font-mono text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Back</RouterLink> -->

                      <div @click="hanldeBack"
                    class="inline-flex justify-center px-4 py-2 ml-3 font-mono text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Back</div>
            </div>
        </div>
    </div>

    <!-- <pre>{{ userDoc }}</pre> -->
</template>

<script>
// import getUser from '@/firebase/getUser';
import getCollectionQueryTerm from '@/firebase/getCollectionQueryTerm';
import { documentId, where } from 'firebase/firestore';
import { watch } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import useCollection from '@/firebase/useCollection';


export default {
    setup() {

        // const {user} = getUser()

        const userDoc = ref(null)

        const name = ref("")
        const idNumber = ref("")
        const gender = ref("")
        const job = ref("")
        const income = ref("")
        const loanPurpose = ref("")
        const address = ref("")
        const relativeName = ref("")
        const contact = ref("")
        const relativePhone = ref("")
        const accountNumber = ref("")
        const bankName = ref("")


        const route = useRoute()
        const { updateDocs } = useCollection('customers');

        watch(
            () => route.params.id,
            async (newUid) => {
                if (newUid) {
                    const { documents } = await getCollectionQueryTerm('customers', where(documentId(), '==', newUid));

                    watch(() => {
                        userDoc.value = documents.value || null;
                        if (userDoc.value && userDoc.value.length > 0) {
                            name.value = userDoc.value[0].name || "";
                            idNumber.value = userDoc.value[0].idNumber || "";
                            gender.value = userDoc.value[0].gender || "";
                            job.value = userDoc.value[0].job || "";
                            income.value = userDoc.value[0].income || "";
                            loanPurpose.value = userDoc.value[0].loanPurpose || "";
                            address.value = userDoc.value[0].address || "";
                            relativeName.value = userDoc.value[0].relativeName || "";
                            contact.value = userDoc.value[0].contact || "";
                            relativePhone.value = userDoc.value[0].relativePhone || "";
                            bankName.value = userDoc.value[0].bankName || "";
                            accountNumber.value = userDoc.value[0].accountNumber || "";

                        } else {
                            name.value = "";
                        }
                    })

                }
            },
            { immediate: true }
        );


        const handleUpdate = async () => {
            if (userDoc.value && userDoc.value.length > 0) {
                const data = {
                    name: name.value,
                    idNumber: idNumber.value,
                    gender: gender.value,
                    job: job.value,
                    income: income.value,
                    loanPurpose: loanPurpose.value,
                    address: address.value,
                    relativeName: relativeName.value,
                    contact: contact.value,
                    relativePhone: relativePhone.value,
                }
                await updateDocs(userDoc.value[0].id, data)
                alert("Customer details updated successfully.")
            } else {
                console.error("No user document found for update.");
            }
        }


        const handleUpdateBank = async () => {
            if (userDoc.value && userDoc.value.length > 0) {
                const data = {
                    bankName: bankName.value,
                    accountNumber: accountNumber.value,
                }
                await updateDocs(userDoc.value[0].id, data)
                alert("Bank details updated successfully.")
            } else {
                console.error("No user document found for update.");
            }
        }



        const hanldeBack = () => {
            // router.push({ name: 'customers' })
            window.history.go(-1);
        }

        
        return { userDoc, name, idNumber, gender, job, income, loanPurpose, address, relativeName, contact, relativePhone, handleUpdate, bankName, accountNumber, handleUpdateBank,hanldeBack }

    }
}


</script>