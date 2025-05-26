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

                        <span>Withdraw List</span>
                    </h2>

                    <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">{{
                        data?.length }}
                        Withdrawal</span>
                </div>

            </div>


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
                        <th class="border border-gray-300">Withdrawal Code</th>
                        <th class="border border-gray-300 ">Names</th>
                        <!-- <th class="border border-gray-300">Gender</th> -->
                        <th class="border border-gray-300">Amount</th>
                        <th class="w-20 border border-gray-300">Month</th>
                        <th class="border border-gray-300 ">Withdrawal Date</th>
                        <th class="border border-gray-300 ">Status</th>
                        <th class="border border-gray-300 ">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(customer, index) in filteredData" :key="customer.id" class="text-sm font-medium">
                        <td class="p-2 px-1 border border-gray-300">#{{ index + 1 }}</td>
                        <td class="px-2 border border-gray-300">{{ customer?.codeWithdraw }}</td>
                        <td class="px-2 border border-gray-300">{{ customer?.name }}</td>
                        <!-- <td class="px-2 border border-gray-300">{{ customer?.gender }}</td> -->

                        <td class="px-2 border border-gray-300">₱ {{ customer?.totalPrincipalAndInterest }}</td>
                        <td class="px-2 border border-gray-300"> {{ customer?.term }} Months</td>
                        <td class="w-10 px-2 border border-gray-300"> {{ formatDate(customer?.createdAt) }}</td>
                        <td class="w-32 px-2 border border-gray-300">
                            <div v-if="customer.status === '0'"
                                class="p-1 text-xs text-center text-white bg-gray-500 shadow-md cursor-pointer">
                                Under Review
                            </div>
                            <div v-else-if="customer.status ===
                                '1'" class="p-1 text-sm text-center text-white bg-green-500 shadow-md">
                                <p>Withdrawal Successfull</p>
                            </div>
                            <div v-else-if="customer.status === '2'"
                                class="p-1 text-center text-white bg-red-700 shadow text-md">
                                <p>Refused To Pay</p>
                            </div>
                        </td>

                        <td class="px-2 border border-gray-300 w-72">
                            <div class="flex flex-wrap gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap">




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


                                <div v-if="customer.status === '0' || customer.status === '2'">
                                    <div @click="handleConfirmLoan(customer?.id)">
                                        <div
                                            class="flex items-center gap-2 p-2 text-white bg-blue-600 shadow-md cursor-pointer hover:bg-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-check-icon lucide-check">
                                                <path d="M20 6 9 17l-5-5" />
                                            </svg>
                                            <p>Confirm Withdrawal</p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div>
                                        <div
                                            class="flex items-center gap-2 p-2 text-white bg-blue-400 shadow-md cursor-pointer ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-check-icon lucide-check">
                                                <path d="M20 6 9 17l-5-5" />
                                            </svg>
                                            <p>Confirm Withdrawal</p>
                                        </div>
                                    </div>
                                </div>





                                <div v-if="customer.status === '2'"
                                    class="flex items-center gap-1 p-2 text-white bg-red-400 shadow-md cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="text-white lucide lucide-x-icon lucide-x">
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                    <p>Reject Withdrawal</p>
                                </div>
                                <div v-else
                                    class="flex items-center gap-1 p-2 text-white bg-red-600 shadow-md cursor-pointer hover:bg-red-500"
                                    @click="handleReject(customer?.id, customer?.withDrawAmount)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="text-white lucide lucide-x-icon lucide-x">
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                    <p>Reject Withdrawal</p>
                                </div>

                                <div class="flex items-center gap-2 p-2 text-white bg-red-600 shadow-md cursor-pointer hover:bg-red-500"
                                    @click="handleDelete(customer?.id)">
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

            <!-- <pre>{{ data }}</pre> -->
        </div>

    </section>




    <!-- modal Update stutus -->
    <component :is="currentComponents" :statusData="statusData" @close="currentComponents = ''"
        :creditData="creditData" />
</template>


<script>
import getCollection from '@/firebase/getCollection';
import { ref, computed, watch, onMounted } from 'vue';
import UpdateCustomerModal from '@/components/admin/UpdateStatusModal.vue'
import { useFirestorePagination } from '@/firebase/useFirestorePagination';
import useCollectionSearch from '@/firebase/useCollectionSearch'
import useCollection from '@/firebase/useCollection';
import AddCreditModal from '@/components/admin/AddCreditModal.vue';
import WithDrawAmountModal from '@/components/admin/WithDrawAmountModal.vue';
import AddCodeWithDrawModal from '@/components/admin/AddCodeWithDrawModal.vue';

export default {
    components: {
        UpdateCustomerModal,
        AddCreditModal,
        WithDrawAmountModal,
        AddCodeWithDrawModal
    },

    setup() {
        // Refs
        const currentComponents = ref("");
        const creditData = ref(null);
        const statusData = ref(null);
        const searchText = ref("");
        const fromDate = ref(null);
        const toDate = ref(null);
        const rawData = ref([]); // Store unfiltered data

        // Firebase Collections
        const { document: customers } = getCollection("withdrawLoan");
        const { deleteDocs, updateDocs } = useCollection("withdrawLoan");
        const { updateDocs: updateDocsCustomer } = useCollection('customers');

        // Pagination
        const itemsPerPage = ref(10);
        const { 
            data, 
            currentPage, 
            pageRange, 
            totalPages, 
            loadPreviousPage, 
            loadNextPage, 
            goToPage, 
            fetchTotalPages, 
            getDataRealTime 
        } = useFirestorePagination('withdrawLoan', itemsPerPage.value);

        // Initialize
        onMounted(async () => {
            await fetchTotalPages();
            await getDataRealTime(currentPage.value);
        });

        // Handle current update
        const handleCurrentUpdate = (item) => {
            statusData.value = item;
            currentComponents.value = 'UpdateCustomerModal';
        }

        // Search functionality
        watch(searchText, async (newVal) => {
            currentPage.value = 1;
            if (newVal.trim()) {
                const { documents } = useCollectionSearch('withdrawLoan', newVal.trim().toLowerCase(), 'name');
                watch(documents, (newDocs) => {
                    if (newDocs) {
                        rawData.value = newDocs;
                        applyFilters();
                    }
                }, { immediate: true });
            } else {
                // Reset to original data when search is cleared
                getDataRealTime(currentPage.value);
            }
        });

        // Date filter
        const filteredData = computed(() => {
            if (!fromDate.value || !toDate.value) return rawData.value.length ? rawData.value : data.value;

            const from = new Date(fromDate.value);
            const to = new Date(toDate.value);
            to.setHours(23, 59, 59, 999);

            const sourceData = rawData.value.length ? rawData.value : data.value;
            
            return sourceData.filter((customer) => {
                const createdAt = customer.createdAt?.toDate ? customer.createdAt.toDate() : new Date(customer.createdAt);
                return createdAt >= from && createdAt <= to;
            });
        });

        // Apply filters and update pagination
        const applyFilters = () => {
            if (filteredData.value.length) {
                data.value = filteredData.value.slice(
                    (currentPage.value - 1) * itemsPerPage.value,
                    currentPage.value * itemsPerPage.value
                );
                totalPages.value = Math.ceil(filteredData.value.length / itemsPerPage.value);
                pageRange.value = Array.from({ length: totalPages.value }, (_, i) => i + 1);
            }
        };

        // Watch date changes
        watch([fromDate, toDate], () => {
            currentPage.value = 1;
            applyFilters();
        });

        // Delete handler
        const handleDelete = async (id) => {
            try {
                if (window.confirm("Are you sure you want to delete?")) {
                    await deleteDocs(id);
                    alert("Delete Successful");
                    getDataRealTime(currentPage.value); // Refresh data
                }
            } catch (err) {
                console.error(err);
            }
        };

        // Date formatter
        const formatDate = (timestamp) => {
            if (!timestamp) return 'N/A';
            const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
            return date.toLocaleDateString();
        }

        // Withdrawal handlers
        const handleReject = async (id, withDrawAmount) => {
            if (window.confirm("Are you sure you want to reject this withdrawal?")) {
                try {
                    await updateDocs(id, { status: '2', withDrawAmount: 0 });
                    await updateDocsCustomer(id, { withDrawAmount });
                    alert("Withdrawal Rejected Successfully");
                    getDataRealTime(currentPage.value); // Refresh data
                } catch (error) {
                    console.error("Error rejecting withdrawal:", error);
                }
            }
        }

        const handleConfirmLoan = async (id) => {
            try {
                if (window.confirm("Are you sure you want to confirm this withdrawal?")) {
                    await updateDocs(id, { status: '1', withDrawAmount: 0 });
                    getDataRealTime(currentPage.value); // Refresh data
                }
            } catch (error) {
                console.error("Error confirming loan:", error);
            }
        }

        return {
            handleCurrentUpdate,
            currentComponents,
            statusData,
            data,
            loadPreviousPage,
            loadNextPage,
            goToPage,
            totalPages,
            searchText,
            itemsPerPage,
            pageRange,
            customers,
            currentPage,
            handleDelete,
            creditData,
            formatDate,
            handleReject,
            handleConfirmLoan,
            fromDate,
            toDate,
            filteredData
        }
    }
}
</script>