<template>
    <div class="hidden lg:block">
        <NavbarComponent />
    </div>
    <div class="lg:hidden">
        <MobileView />
    </div>
    <div class="w-full max-w-4xl px-5 py-10 m-auto mt-1 " v-motion-fade>
        <div class="mb-6 text-2xl text-center ">
            <div
                class="w-[180px] h-[180px] mx-auto rounded-full border-blue-500 border-8 flex items-center justify-center text-black ">
                <div v-for="usDoc in userDoc" :key="usDoc" class="space-y-2 text-center">
                    <h1 class="text-3xl text-black ">{{ usDoc?.credit }}</h1>
                    <span class="text-black ">Meduim Credit</span>
                </div>
                <span v-if="!user" class="text-black ">No Meduim Credit</span>

            </div>
            <h2 class="mt-4 text-lg font-semibold text-black">Name</h2>
            <div>
                <div v-if="user" class="text-sm text-black">Phone : {{ user?.email?.slice(0, 10) }}</div>
                <div v-else class="text-sm text-black">No Account? <RouterLink :to="{ name: 'login' }"
                        class="text-blue-500 hover:underline">Login</RouterLink>
                </div>
            </div>

        </div>

        <div class="space-gap-2">
            <div class="col-span-2 lg:col-span-1">
                <router-link to="/persionalProfile"
                    class="flex items-center w-full p-3 text-left text-white bg-[oklch(58.8%_0.158_241.966)] opacity-90 border border-gray-300 rounded-full shadow-xl hover:bg-blue-700">
                    <svg class="h-6 ml-3 text-white w-7" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M5.121 17.804A11.953 11.953 0 0112 15c2.5 0 4.847.776 6.879 2.098M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span class="ml-3 md:text-xl ">Personal Information</span>
                </router-link>
            </div>

            <div class="col-span-2 mt-2 lg:col-span-1">
                <router-link to="/baneficicaryProfile"
                    class="flex items-center w-full p-3 text-left text-white bg-[oklch(58.8%_0.158_241.966)] opacity-90  border border-gray-300 rounded-full shadow-xl hover:bg-blue-700">
                    <svg class="h-6 ml-3 text-white w-7" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z" />
                    </svg>
                    <span class="ml-3 md:text-xl">Beneficiary Information</span>
                </router-link>
            </div>

            <div class="col-span-2 mt-2 lg:col-span-1">
                <router-link to="/loancontactProfile"
                    class="flex items-center w-full p-3 text-left text-white bg-[oklch(58.8%_0.158_241.966)] opacity-90  border border-gray-300 rounded-full shadow-xl hover:bg-blue-700">
                    <svg class="h-6 ml-3 text-white w-7" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h8M8 11h8M8 15h4" />
                    </svg>
                    <span class="ml-3 md:text-xl">Loan Contract</span>
                </router-link>
            </div>

            <div class="col-span-2 mt-2 lg:col-span-1">
                <button
                    class="flex items-center w-full p-3 text-left text-white bg-[oklch(58.8%_0.158_241.966)] opacity-90  border border-gray-300 rounded-full shadow-xl hover:bg-blue-700">
                    <svg class="h-6 ml-3 text-white w-7" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8 7h8M8 11h8M8 15h8M12 3v1m-4-1v1m8-1v1m-9 16h10a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span class="ml-3 md:text-xl">Payment Schedule</span>
                </button>
            </div>



            <div class="col-span-2 mt-2 lg:col-span-1">
                <button
                    class="flex items-center w-full p-3 text-left text-white bg-[oklch(58.8%_0.158_241.966)] opacity-90  border border-gray-300 rounded-full shadow-xl hover:bg-blue-700">
                    <svg class="h-6 ml-3 text-white w-7" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 8c-4.418 0-8 2.239-8 5s3.582 5 8 5 8-2.239 8-5-3.582-5-8-5z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8V4m0 16v-4" />
                    </svg>
                    <span class="ml-3 md:text-xl">Transactions</span>
                </button>
            </div>

            <div class="mb-20">
                <div class="w-full mt-2">
                    <router-link to="/#"
                        class="flex items-center w-full p-3 text-left text-white bg-[oklch(58.8%_0.158_241.966)] opacity-90  border border-gray-300 rounded-full shadow-xl lg:mb-0 hover:bg-blue-700">
                        <svg class="h-6 ml-3 text-white w-7" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 8c-4.418 0-8 2.239-8 5s3.582 5 8 5 8-2.239 8-5-3.582-5-8-5z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8V4m0 16v-4" />
                        </svg>
                        <span class="ml-3 md:text-xl">About Us</span>
                    </router-link>
                </div>

                <div v-if="user" class="flex justify-center col-span-2 mt-6 ">
                    <div class="">
                        <button @click="handleLogout"
                            class="flex items-center justify-center gap-3 py-3 mb-40 text-black transition border border-red-300 rounded-full hover:text-white w-52 px md:text-xl hover:bg-red-500">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 17L21 12L16 7" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M12 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H12"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import MobileView from './MobileView.vue';
import { useRouter } from 'vue-router';
import useSignout from '@/firebase/useSignout';
import getUser from '@/firebase/getUser';
import { watch } from 'vue';
import getCollectionQueryTerm from '@/firebase/getCollectionQueryTerm';
import { documentId, where } from 'firebase/firestore';
import { ref } from 'vue';

export default {
    components: {
        NavbarComponent,
        MobileView,
    },
    setup() {
        const router = useRouter();
        const { user } = getUser()
        const { signOut } = useSignout()

        const userDoc = ref(null)



        watch(
            () => user.value?.uid,
            async (newUid) => {
                if (newUid) {
                    const { documents } = await getCollectionQueryTerm('customers', where(documentId(), '==', newUid));
                    // console.log("documents", documents);
                    watch(() => {
                        userDoc.value = documents.value || null;
                    })



                }
            },
            { immediate: true }
        );


        const handleLogout = async () => {
            // Perform logout logic here, e.g., clearing tokens or user data
            try {
                if (window.confirm("Are you sure you want to logout?")) {
                    await signOut()
                    router.push('/')
                }
            }
            catch (err) {
                console.log(err)
            }
        };

        return {
            handleLogout,
            user,
            userDoc
        };
    }
}
</script>

<style></style>
