<template>

    <div v-if="isAdmin" class="flex flex-col h-screen ">
        <!-- Navbar (always visible on all screen sizes) -->
        <div class="fixed top-0 z-50 w-full bg-white shadow-md print:hidden">
            <nav class="flex items-center justify-between p-2 text-black bg-gray-700 print:hidden ">
                <div class="text-xl font-meduim font-[500] text-white flex items-center gap-1">

                    <p class="flex items-center gap-1 space-x-1 font-medium uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>

                        <span class="text-lg font-medium "> Loan Online System</span>
                        <span class="text-lg font-medium " v-if="roleDocs?.length > 0"> Loan Online System</span>
                    </p>
                </div>
                <div class="hidden space-x-6 lg:flex">
                    <CurrentDate />
                </div>
                <div class="flex items-center gap-3">
                    <div>
                        <div class="flex items-center gap-2">
                            <RouterLink :to="{ name: 'viewAllMember' }"
                                class="flex items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 ">
                                <p>New Member</p>
                                <p class="px-2 bg-red-500 rounded-full">{{ inactiveMembersCount }}</p>
                            </RouterLink>
                            <RouterLink :to="{ name: 'customers' }"
                                class="flex items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 ">
                                <p>New Loan</p>
                                <p class="px-2 bg-red-500 rounded-full">{{ inactiveLoanMembersCount }}</p>
                            </RouterLink>
                            <RouterLink :to="{ name: 'withdrawal' }"
                                class="flex items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 ">
                                <p>New WithDraw</p>
                                <p class="px-2 bg-red-500 rounded-full">{{ withdrawLoanDoc?.length }}</p>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="flex gap-1">
                            <p class="text-xs text-white uppercase">Profile៖ <span class="font-bold">{{ user?.email
                            }}</span></p>
                        </div>
                        <div class="p-4 bg-gray-100 rounded-full shadow-xl">

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-user">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Main content area -->
        <div class="flex flex-1">
            <!-- Sidebar (hidden on small screens) -->
            <div
                class="w-16 p-4 pt-20 text-sm text-black transition-all duration-300 ease-in-out border-t bg-gray-800/90 lg:w-64 print:hidden">
                <ul class="sticky space-y-2 top-20 ">


                    <li class="block">
                        <RouterLink :to="{ name: 'dashboard' }"
                            class="flex items-center gap-3 px-4 py-2 font-thin rounded hover:bg-black/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-white size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span class="font-bold text-white capitalize">Dashboard</span>
                        </RouterLink>
                    </li>


                    <li class="block">
                        <RouterLink :to="{ name: 'viewAllMember' }"
                            class="flex items-center gap-3 px-4 py-2 font-thin rounded hover:bg-black/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-white size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span class="font-bold text-white capitalize ">All Members</span>
                        </RouterLink>
                    </li>



                    <li class="block">
                        <RouterLink :to="{ name: 'customers' }"
                            class="flex items-center gap-3 px-4 py-2 font-thin rounded hover:bg-black/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-white size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span class="font-bold text-white capitalize ">Borrowing List</span>
                        </RouterLink>
                    </li>

                    <li class="block">
                        <RouterLink :to="{ name: 'withdrawal' }"
                            class="flex items-center gap-3 px-4 py-2 font-thin rounded hover:bg-black/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-white size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span class="font-bold text-white capitalize ">Withdrawal List</span>
                        </RouterLink>
                    </li>


                    <li v-if="allowAdmin || allowSuperAdmin" class="block">
                        <RouterLink :to="{ name: 'slide' }"
                            class="flex items-center gap-3 px-4 py-2 font-thin rounded hover:bg-black/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-white size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span class="font-bold text-white capitalize ">Slides</span>
                        </RouterLink>
                    </li>

                    <li v-if="allowSuperAdmin" class="block">
                        <RouterLink :to="{ name: 'adminRegister' }"
                            class="flex items-center gap-3 px-4 py-2 font-thin rounded hover:bg-black/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-white size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span class="font-bold text-white capitalize ">Staff Management</span>
                        </RouterLink>
                    </li>


                    <li v-if="allowSuperAdmin" class="block">
                        <RouterLink :to="{ name: 'adminRegister' }"
                            class="flex items-center gap-3 px-4 py-2 font-thin rounded hover:bg-black/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-white size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span class="font-bold text-white capitalize ">Staff List</span>
                        </RouterLink>
                    </li>


                </ul>
            </div>

            <!-- Content -->
            <div class="flex-1 p-6 mt-20 bg-gray-50">
                <router-view />
            </div>
        </div>


        <div class="fixed bottom-4 right-4">
            <button @click="handleLogout"
                class="flex items-center gap-1 px-4 py-2 font-bold text-white bg-red-500 rounded-full shadow-lg hover:bg-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-circle-arrow-out-up-left-icon lucide-circle-arrow-out-up-left">
                    <path d="M2 8V2h6" />
                    <path d="m2 2 10 10" />
                    <path d="M12 2A10 10 0 1 1 2 12" />
                </svg>

                <span class="font-medium ">Logout</span>
            </button>
        </div>

        <!-- <pre>{{ roleDocs }}</pre> -->

    </div>

</template>

<script>
import useSignout from '@/firebase/useSignout';
import { useRouter } from 'vue-router';

import getUser from '@/firebase/getUser';
import getCollection from '@/firebase/getCollection';
import { computed } from 'vue';

export default {
    setup() {

        const { signOut } = useSignout()
        const router = useRouter()

        const { user } = getUser()

        const { document: members } = getCollection("customers")
        const { document: withdrawLoanDoc } = getCollection("withdrawLoan")
        const { document: roleDoc } = getCollection("roles");




        const handleLogout = async () => {
            try {
                if (window.confirm("Are you sure you want to logout?")) {
                    await signOut()
                    router.push('/login')
                }
            }
            catch (err) {
                console.log(err)
            }
        };


        const inactiveMembers = computed(() => {
            return members.value
                ? members.value.filter(customer => !customer.status)
                : [];
        });

        const inactiveMembersCount = computed(() => inactiveMembers.value.length);


        const inactiveLoanMembers = computed(() => {
            return members.value
                ? members.value.filter(customer => customer.status)
                : [];
        });

        const inactiveLoanMembersCount = computed(() => inactiveLoanMembers.value.length);




        //set permission page
        const isAdmin = computed(() => {
            return roleDoc.value?.some(role =>
                role.email === user.value?.email &&
                ['admin', 'superadmin', 'staff'].includes(role.roles)
            );
        });


        const allowSuperAdmin = computed(() => {
            return roleDoc.value?.some(role =>
                role.email === user.value?.email &&
                ['superadmin'].includes(role.roles)
            );
        })


        const allowAdmin = computed(() => {
            return roleDoc.value?.some(role =>
                role.email === user.value?.email &&
                ['admin'].includes(role.roles)
            );
        })



        return { handleLogout, user, inactiveMembersCount, inactiveLoanMembersCount, withdrawLoanDoc, isAdmin, allowSuperAdmin,allowAdmin }

    }
}

</script>



<style scoped>
/* Optional: Add custom styling for the sidebar and navbar */
</style>
