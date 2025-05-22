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

                        <span>Slide Table</span>
                    </h2>


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

            <button @click="handleAddSlideModal('AddModalSlide')"
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 bg-blue-500 shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span>Add Slide</span>
            </button>

        </div>

        <div class="w-[100%] h-full p-4 bg-white border border-t-0">


            <table class="w-full border border-collapse border-gray-400">
                <thead class="bg-[#2EABBF]/90 text-white font-mono text-xs">
                    <tr>
                        <th class="p-2 border border-gray-300">No</th>

                        <th class="p-2 border border-gray-300">Images</th>

                        <th class="border border-gray-300">Status</th>
                        <th class="border border-gray-300">Created At</th>


                        <th class="border border-gray-300 ">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(slide, index) in slides" :key="slide" class="text-sm font-medium">
                        <td class="p-2 px-1 border border-gray-300">#{{ index + 1 }}</td>
                        <td class="px-2 border border-gray-300">
                            <div class="flex items-center justify-center py-2">
                                <img :src="slide.image" class="w-40">
                            </div>
                        </td>

                        <td class="px-2 border border-gray-300">
                            <button @click="handleUpdateToggleStatus(slide?.id, slide?.status)"
                                v-if="slide.status === 1"
                                class="p-1 text-xs text-center text-green-600 bg-green-100 rounded-md">
                                Enabled
                            </button>

                            <button @click="handleUpdateToggleStatus(slide?.id, slide?.status)" v-else
                                class="p-1 text-xs text-center text-red-600 bg-red-100 rounded-md">
                                Disabled
                            </button>

                        </td>
                        <td class="px-2 border border-gray-300">{{ formatDate(slide?.createdAt) }}</td>

                        <td class="px-2 border border-gray-300 w-72">
                            <div class="flex gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap">





                                <div @click="handleDelete(slide?.id, slide?.image)">
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

    <!-- <pre>{{ slides }}</pre> -->


    <!-- modal Update stutus -->
    <component :is="currentComponents" :statusData="statusData" @close="currentComponents = ''"
        :creditData="creditData" />
</template>
<script>
import getCollection from '@/firebase/getCollection';
import { ref } from 'vue';
import UpdateCustomerModal from '@/components/admin/UpdateStatusModal.vue'

import useCollection from '@/firebase/useCollection';
import useStorage from '@/firebase/useStorage';
// import getUser from '@/firebase/getUser';
import AddCreditModal from '@/components/admin/AddCreditModal.vue';
import AddModalSlide from '@/components/admin/AddSlideModal.vue';
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

        const { document: slides } = getCollection("slides")
        const { deleteDocs, updateDocs } = useCollection("slides")


        const { removeImage } = useStorage()
        // const { user } = getUser()


        //  search text


        const handleDelete = async (id, image) => {
            try {



                if (window.confirm("Are you sure you want to delete?")) {


                    await deleteDocs(id);
                    await removeImage(image);

                    alert("Delete Successfull")

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

        const handleUpdateToggleStatus = async (id, currentStatus) => {
            try {
                const data = {
                    status: currentStatus === 1 ? 0 : 1
                };

                await updateDocs(id, data);
                alert("You updated status!");
            } catch (err) {
                console.log(err);
            }
        };



        return {

            currentComponents,
            statusData,

            searchText,
            itemsPerPage,

            slides,

            handleDelete,
            creditData,
            handleAddSlideModal,
            formatDate,
            handleUpdateToggleStatus

        }

    }
}

</script>