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
                        <span>All Member Register</span>
                    </h2>
                </div>
            </div>
        </div>

        <div class="px-4 py-3 my-10 text-teal-900 bg-yellow-200 border-t-4 border-red-500 rounded-b shadow-md"
            role="alert">
            <div class="flex space-x-2">
                <div class="py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-triangle-alert-icon lucide-triangle-alert">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                    </svg>

                </div>
                <div>
                    <p class="font-bold">Warning for user account</p>
                    <p class="text-sm">Make sure you want to delete each user account to affect the system!. Note that,
                        this action is not reversible.</p>
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

            <RouterLink :to="{ name: 'adminRegister' }"
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 bg-blue-500 shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span>Add User</span>
            </RouterLink>

        </div>

        <div class="w-[100%] h-full p-4 bg-white border border-t-0">


            <table class="w-full border border-collapse border-gray-400">
                <thead class="bg-[#2EABBF]/90 text-white font-mono text-xs">
                    <tr>
                        <th class="p-2 border border-gray-300">No</th>
                        <th class="p-2 border border-gray-300">userID</th>
                        <th class="p-2 border border-gray-300">Phone Number</th>
                        <th class="border border-gray-300">Created Date</th>
                        <th class="border border-gray-300">Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in data" :key="user" class="text-sm font-medium">
                        <td class="p-2 px-1 border border-gray-300">#{{ index + 1 }}</td>
                        <td class="p-2 px-1 border border-gray-300">{{ user.id }}</td>
                        <td class="px-2 border border-gray-300">
                            <div class="flex items-center justify-center py-2">
                                <p>{{ user.phone }}</p>
                            </div>
                        </td>



                        <td class="px-2 border border-gray-300">{{ formatDate(user?.createdAt) }}</td>

                        <td class="px-2 border border-gray-300 w-72">


                            <div class="flex gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div>
                                    <div @click="handleDeleteAllUserAndCustomer(user.id)">
                                        <div class="text-red-500 underline cursor-pointer hover:text-red-700">

                                            <p>Delete All User Related </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <RouterLink :to="{ name: 'viewCustomer', params: { id: user.id } }">
                                        <div class="text-blue-500 underline hover:text-blue-700">

                                            <p>View User Register</p>
                                        </div>
                                    </RouterLink>
                                </div>
                                <div v-if="user.users !== 'superadmin'" @click="handleDelete(user.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="cursor-pointer lucide lucide-trash2-icon lucide-trash-2 hover:text-red-500">
                                        <path d="M3 6h18" />
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                        <line x1="10" x2="10" y1="11" y2="17" />
                                        <line x1="14" x2="14" y1="11" y2="17" />
                                    </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>


    </section>


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


    <!-- <pre>{{ slides }}</pre> -->





    <!-- modal Update stutus -->
    <component :is="currentComponents" :statusData="statusData" @close="currentComponents = ''"
        :creditData="creditData" />
</template>
<script>
import getCollection from '@/firebase/getCollection';
import { ref } from 'vue';
import UpdateCustomerModal from '@/components/admin/UpdateStatusModal.vue'

// import getUser from '@/firebase/getUser';
import AddCreditModal from '@/components/admin/AddCreditModal.vue';
import AddModalSlide from '@/components/admin/AddSlideModal.vue';
import { onMounted } from 'vue';
import { useFirestorePagination } from '@/firebase/useFirestorePagination';
import useCollectionSearch from '@/firebase/useCollectionSearch'
import { watch } from 'vue';

export default {
    components: {
        UpdateCustomerModal,
        AddCreditModal,
        AddModalSlide

    },

    setup() {

        const currentComponents = ref("")
        const creditData = ref(null)


        const statusData = ref(null)
        const searchText = ref("")
        const itemsPerPage = ref(10)

        const { document: allUserDoc } = getCollection("users")

        // const { user } = getUser()


        //  search text


        const { data, currentPage, pageRange, totalPages, loadPreviousPage, loadNextPage, goToPage, fetchTotalPages, getDataRealTime } = useFirestorePagination('users', 10);



        onMounted(() => {
            fetchTotalPages();
            getDataRealTime(currentPage.value);
        });




        const handleDelete = async (uid) => {
            try {
                console.log("uid", uid);

                if (window.confirm("Are you sure you want to delete?")) {
                    const response = await fetch(
                        `https://deleteuserregister-4axeom4mha-uc.a.run.app/deleteUserRegister?uid=${uid}`,
                        {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        }
                    );

                    if (!response.ok) {
                        const errorText = await response.text();
                        throw new Error(errorText);
                    }

                    const result = await response.text();
                    console.log(result);
                    alert(result);
                }
            } catch (err) {
                console.log(err);
            }
        };


        //delete all user register and customer data


        const handleDeleteAllUserAndCustomer = async (uid) => {
            try {


                if (window.confirm("Are you sure you want to delete?")) {
                    const response = await fetch(
                        `https://deletealluserwithcustomers-4axeom4mha-uc.a.run.app/deleteAllUserWithCustomers?uid=${uid}`,
                        {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        }
                    );

                    if (!response.ok) {
                        const errorText = await response.text();
                        throw new Error(errorText);
                    }

                    const result = await response.text();
                    console.log(result);
                    alert(result);
                }
            } catch (err) {
                console.log(err);
            }
        };


        //add credit 


        const handleAddSlideModal = (component) => {

            currentComponents.value = component
        }

        const formatDate = (timestamp) => {
            if (!timestamp) return 'N/A';
            const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
            return date.toLocaleDateString(); // Or use toLocaleDateString() if you want just the date
        }


        //search


           watch(searchText, async (newVal) => {
            if (newVal.trim()) {
                currentPage.value = 1; // Reset current page to 1 on search
                const { documents } = useCollectionSearch('users', newVal.trim().toLowerCase(), 'phone');

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



        return {

            currentComponents,
            statusData,

            searchText,
            itemsPerPage,

            allUserDoc,

            handleDelete,
            creditData,
            handleAddSlideModal,
            formatDate,
            handleDeleteAllUserAndCustomer,

            data,
            loadPreviousPage,
            loadNextPage,
            goToPage,
            fetchTotalPages,
            getDataRealTime,
            totalPages,
            pageRange,
            currentPage,




        }

    }
}

</script>