<template>
    <!-- component -->
    <section class="px-4 ">
        <div class="p-2 py-3 bg-black/80 sm:flex sm:items-center sm:justify-between">
            <div>
                <div class="flex items-center gap-x-3">
                    <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>

                        <span>Borrowing List</span>
                    </h2>

                    <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">{{
                        customerStatus?.length }}
                        Request</span>
                </div>

            </div>

            <!-- <div class="flex items-center mt-4 gap-x-3">
                <button
                    class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3098_154395)">
                            <path
                                d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
                                stroke="currentColor" stroke-width="1.67" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3098_154395">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <span>Import</span>
                </button>

                <button
                    class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span>Add vendor</span>
                </button>
            </div> -->
        </div>

        <div class="p-4 bg-white border md:flex md:items-center md:justify-between">


            <div class="relative flex items-center mt-4 md:mt-0">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 ">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>

                <input type="text" v-model="searchText" placeholder="Search"
                    class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200  md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>


            <div class="flex items-center gap-2">
                <div class="relative flex items-center mt-4 md:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="absolute ml-2 text-gray-500 lucide lucide-calendar-fold-icon lucide-calendar-fold">
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <path d="M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" />
                        <path d="M3 10h18" />
                        <path d="M15 22v-4a2 2 0 0 1 2-2h4" />
                    </svg>

                    <input type="date" v-model="fromDate" placeholder="Search"
                        class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200  md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
                <span>To</span>
                <div class="relative flex items-center mt-4 md:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="absolute ml-2 text-gray-500 lucide lucide-calendar-fold-icon lucide-calendar-fold">
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <path d="M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" />
                        <path d="M3 10h18" />
                        <path d="M15 22v-4a2 2 0 0 1 2-2h4" />
                    </svg>

                    <input type="date" v-model="toDate" placeholder="Search"
                        class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200  md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>

                <div>
                    <button
                        class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-search-icon lucide-search">
                            <path d="m21 21-4.34-4.34" />
                            <circle cx="11" cy="11" r="8" />
                        </svg>
                        <span>Search</span>
                    </button>
                </div>
            </div>

        </div>

        <div class="w-[100%] h-full p-4 bg-white border border-t-0">



            <table class="w-full border border-collapse border-gray-400">
                <thead class="bg-[#2EABBF]/90 text-white font-mono text-xs">
                    <tr>
                        <th class="w-20 p-2 border border-gray-300">No</th>
                        <th class="border border-gray-300">Names</th>
                        <th class="border border-gray-300 ">Identify No</th>
                        <th class="border border-gray-300">Gender</th>
                        <th class="border border-gray-300">Loan Amount</th>
                        <th class="border border-gray-300 ">Month</th>
                        <th class="border border-gray-300 ">Created Date</th>
                        <th class="border border-gray-300 ">Status</th>
                        <th class="border border-gray-300 ">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(customer, index) in filterFromDateToData" :key="customer" class="text-sm font-medium">
                        <td class="p-2 px-1 border border-gray-300">#{{ index + 1 }}</td>
                        <td class="px-2 border border-gray-300">{{ customer?.name }}</td>

                        <td class="px-2 border border-gray-300">{{ customer?.idNumber }}</td>

                        <td class="px-2 border border-gray-300">{{ customer?.gender }}</td>

                        <td class="px-2 border border-gray-300">₱ {{ customer?.amount }}</td>
                        <td class="px-2 border border-gray-300"> {{ customer?.term }} Months</td>
                        <td class="w-10 px-2 border border-gray-300"> {{ formatDate(customer?.createdAt) }}</td>
                        <td class="px-2 border border-gray-300 w-28">
                            <div v-if="customer.status === '0'"
                                class="p-1 text-xs text-center text-white bg-orange-500">
                                Under Review
                            </div>
                            <div v-else-if="customer.status === '1'">
                                <div class="p-1 text-xs text-center text-white bg-green-500">
                                    <p>Approved</p>
                                </div>
                                <p class="text-xs text-gray-500">Congratulations, your loan has been approved.</p>
                            </div>
                            <div v-else class="p-1 text-xs text-center text-white bg-red-500">
                                <p>Not Completed</p>
                            </div>
                        </td>
                        <td class="px-2 border border-gray-300 w-72">
                            <div class="flex flex-wrap gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div v-if="customer?.status === '0' || customer?.status === '1'"
                                    @click="handleCurrentUpdate(customer)"
                                    class="flex items-center gap-2 p-2 text-white bg-blue-600 shadow-md cursor-pointer hover:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="cursor-pointer lucide lucide-circle-check-big-icon lucide-circle-check-big ">
                                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                        <path d="m9 11 3 3L22 4" />
                                    </svg>

                                    <p>Review</p>
                                </div>


                                <div @click="handleAddWidthAmountModal(customer)"
                                    class="flex items-center gap-2 p-2 text-white bg-blue-600 shadow-md cursor-pointer hover:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="cursor-pointer lucide lucide-file-input-icon lucide-file-input">
                                        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                        <path d="M2 15h10" />
                                        <path d="m9 18 3-3-3-3" />
                                    </svg>
                                    <p>Wallet Modification</p>
                                </div>

                                <div @click="handleAddCodeWithDrawModal(customer)"
                                    class="flex items-center gap-2 p-2 text-white bg-blue-600 shadow-md cursor-pointer hover:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="cursor-pointer lucide lucide-banknote-arrow-down-icon lucide-banknote-arrow-down ">
                                        <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                                        <path d="m16 19 3 3 3-3" />
                                        <path d="M18 12h.01" />
                                        <path d="M19 16v6" />
                                        <path d="M6 12h.01" />
                                        <circle cx="12" cy="12" r="2" />
                                    </svg>
                                    <p>Withdrawal Code</p>
                                </div>
                                <div>
                                    <RouterLink :to="{ name: 'viewCustomer', params: { id: customer.id } }">
                                        <div
                                            class="flex items-center gap-2 p-2 text-white bg-blue-600 shadow-md cursor-pointer hover:bg-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="cursor-pointer lucide lucide-scan-search-icon lucide-scan-search hover:text-orange-500">
                                                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                                                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                                                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                                                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                                                <circle cx="12" cy="12" r="3" />
                                                <path d="m16 16-1.9-1.9" />
                                            </svg>

                                            <p>Checking Data</p>
                                        </div>
                                    </RouterLink>
                                </div>

                                <div class="flex items-center gap-2 p-2 text-white bg-blue-600 shadow-md cursor-pointer hover:bg-blue-500"
                                    @click="handleAddCreditModal(customer)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-credit-card-icon lucide-credit-card hover:text-blue-500">
                                        <rect width="20" height="14" x="2" y="5" rx="2" />
                                        <line x1="2" x2="22" y1="10" y2="10" />
                                    </svg>
                                    <p>Credit Score</p>
                                </div>
                                <div class="flex items-center gap-2 p-2 text-white bg-blue-600 shadow-md cursor-pointer hover:bg-blue-500"
                                    @click="hanldeViewBank(customer)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-landmark-icon lucide-landmark">
                                        <path d="M10 18v-7" />
                                        <path
                                            d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
                                        <path d="M14 18v-7" />
                                        <path d="M18 18v-7" />
                                        <path d="M3 22h18" />
                                        <path d="M6 18v-7" />
                                    </svg>
                                    <p>Bank </p>
                                </div>

                                <RouterLink :to="{ name: 'viewContract', params: { id: customer.id } }">


                                    <div
                                        class="flex items-center gap-2 p-2 text-white bg-yellow-600 shadow-md cursor-pointer hover:bg-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-eye-icon lucide-eye">
                                            <path
                                                d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        <p>View Contract</p>
                                    </div>

                                </RouterLink>

                                <div class="flex items-center gap-2 p-2 text-white bg-red-600 shadow-md cursor-pointer hover:bg-red-500"
                                    @click="handleDelete(customer?.id, customer?.front_image, customer?.back_image, customer?.selfie_image, customer?.assigned_image)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="cursor-pointer lucide lucide-trash2-icon lucide-trash-2 ">
                                        <path d="M3 6h18" />
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                        <line x1="10" x2="10" y1="11" y2="17" />
                                        <line x1="14" x2="14" y1="11" y2="17" />
                                    </svg>
                                    <p>Delete</p>
                                </div>


                            </div>

                        </td>

                    </tr>

                </tbody>
            </table>

            <!-- Pagination -->
            <div class="flex justify-end px-4 py-3">
                <nav class="flex items-center space-x-1">
                    <!-- Previous Button -->
                    <button type="button" @click="loadPreviousPage" :disabled="currentPage === 1"
                        class="p-2.5 inline-flex border bg-white items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none ">
                        <span>«</span>
                        <span>Previous</span>
                    </button>

                    <!-- Page Number Buttons -->
                    <button v-for="page in pageRange" :key="page" @click="goToPage(page)"
                        :class="['min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none ', { 'bg-blue-500 text-white': currentPage === page }]">
                        {{ page }}
                    </button>

                    <!-- Next Button -->
                    <button type="button" @click="loadNextPage" :disabled="currentPage === totalPages"
                        class="p-2.5 border bg-white inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none ">
                        <span>»</span>
                        <span>Next</span>
                    </button>
                </nav>
            </div>

            <!-- <pre>{{ paginatedStudents }}</pre> -->
        </div>

    </section>

    <!-- <pre>{{ customers }}</pre> -->


    <!-- modal Update stutus -->
    <component :is="currentComponents" :statusData="statusData" @close="currentComponents = ''"
        :creditData="creditData" />
</template>
<script>
import getCollection from '@/firebase/getCollection';
import { ref } from 'vue';
import UpdateCustomerModal from '@/components/admin/UpdateStatusModal.vue'
import { useFirestorePagination } from '@/firebase/useFirestorePagination';
import { onMounted } from 'vue';
import { watch } from 'vue';
import useCollectionSearch from '@/firebase/useCollectionSearch'
import useCollection from '@/firebase/useCollection';
import useStorage from '@/firebase/useStorage';
import getUser from '@/firebase/getUser';
import AddCreditModal from '@/components/admin/AddCreditModal.vue';
import WithDrawAmountModal from '@/components/admin/WithDrawAmountModal.vue';
import AddCodeWithDrawModal from '@/components/admin/AddCodeWithDrawModal.vue';
import { computed } from 'vue';
import ViewBankModal from '@/components/admin/ViewBankModal.vue';
export default {
    components: {
        UpdateCustomerModal,
        AddCreditModal,
        WithDrawAmountModal,
        AddCodeWithDrawModal,
        ViewBankModal
    },

    setup() {

        const currentComponents = ref("")
        const creditData = ref(null)

        const fromDate = ref(null)
        const toDate = ref(null)


        const statusData = ref(null)
        const searchText = ref("")
        const itemsPerPage = ref(10)

        const { document: customers } = getCollection("customers")
        const { deleteDocs, setDocs } = useCollection("customers")


        const { removeImagesArray } = useStorage()
        const { user } = getUser()

        const { data, currentPage, pageRange, totalPages, loadPreviousPage, loadNextPage, goToPage, fetchTotalPages, getDataRealTime } = useFirestorePagination('customers', 10);


        onMounted(() => {
            fetchTotalPages();
            getDataRealTime(currentPage.value);
        });

        const handleCurrentUpdate = (item) => {
            console.log(item)
            statusData.value = item
            currentComponents.value = 'UpdateCustomerModal'
        }


        //  search text
        watch(searchText, async (newVal) => {
            if (newVal.trim()) {
                currentPage.value = 1; // Reset current page to 1 on search
                const { documents } = useCollectionSearch('customers', newVal.trim().toLowerCase(), 'name');

                watch(documents, (newDocs) => {
                    if (newDocs) {
                        data.value = newDocs.slice(0, 10); // Show first page of search results
                        totalPages.value = Math.ceil(newDocs.length / 10); // Update totalPages
                        pageRange.value = Array.from({ length: totalPages.value }, (_, i) => i + 1); // Update page range
                    }
                }, { immediate: true });

            } else {
                // Reset pagination when search is cleared
                currentPage.value = 1;
                fetchTotalPages();
                getDataRealTime(currentPage.value);
            }
        });


        const handleDelete = async (id, fimage, bimage, simage, assign_image) => {
            try {



                if (window.confirm("Are you sure you want to delete?")) {


                    await deleteDocs(id);
                    await removeImagesArray([fimage, bimage, simage, assign_image]);
                    console.log(fimage, bimage, simage, assign_image)
                    alert("Delete Successfull")

                    setTimeout(async () => {
                        const data = {
                            amount: 0
                        }
                        await setDocs(data, user?.value?.uid)
                    })

                }



            } catch (err) {
                console.log(err);
            }
        };

        //add credit 


        const handleAddCreditModal = (item) => {
            currentComponents.value = "AddCreditModal"
            creditData.value = item
        }

        const handleAddWidthAmountModal = (item) => {
            currentComponents.value = "WithDrawAmountModal"
            creditData.value = item
        }

        const handleAddCodeWithDrawModal = (item) => {
            currentComponents.value = "AddCodeWithDrawModal"
            creditData.value = item
        }

        const hanldeViewBank = (item) => {
            currentComponents.value = "ViewBankModal"
            creditData.value = item

        }



        const formatDate = (timestamp) => {
            if (!timestamp) return 'N/A';
            const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
            return date.toLocaleDateString(); // Or use toLocaleDateString() if you want just the date
        }


        const customerStatus = computed(() => {
            return data.value.filter((customer) => {
                return customer.status === '0' || customer.status === '1';
            });
        })

        const filterFromDateToData = computed(() => {
            if (!fromDate.value || !toDate.value) return customerStatus.value;

            const from = new Date(fromDate.value);
            const to = new Date(toDate.value);
            to.setHours(23, 59, 59, 999); 

            return customerStatus.value.filter((customer) => {
                const createdAt = new Date(customer.createdAt);
                return createdAt >= from && createdAt <= to;
            });
        });



        return {
            handleCurrentUpdate,
            currentComponents,
            statusData,
            data,
            loadPreviousPage,
            loadNextPage,
            goToPage,
            fetchTotalPages,
            getDataRealTime,
            totalPages,
            searchText,
            itemsPerPage,
            pageRange,
            customers,
            currentPage,
            handleDelete,
            handleAddCreditModal,
            creditData,
            handleAddWidthAmountModal,
            handleAddCodeWithDrawModal,
            formatDate,
            customerStatus,
            hanldeViewBank,
            fromDate,
            toDate,
            filterFromDateToData
        }

    }
}

</script>