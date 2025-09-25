<template>
    <div class="max-w-4xl px-6 mx-auto mb-10 lg:mb-0">
        <div>
            <section class="text-gray-700 body-font">
                <div class="container py-24 mx-auto">

                    <div class="grid grid-cols-2 gap-4 px-6 py-6 md:grid-cols-3">

                        <!-- Wallet -->
                        <RouterLink to="/wallet"
                            class="flex flex-col items-center justify-center p-6 transition duration-300 transform shadow-md bg-white/20 backdrop-blur-md rounded-xl hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2" class="w-10 h-10 mb-3 text-white">
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                            </svg>
                            <span class="text-sm font-medium text-white">Wallet</span>
                        </RouterLink>

                        <!-- Account -->
                        <RouterLink to="/account"
                            class="flex flex-col items-center justify-center p-6 transition duration-300 transform shadow-md bg-white/20 backdrop-blur-md rounded-xl hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2" class="w-10 h-10 mb-3 text-white">
                                <circle cx="12" cy="7" r="4" />
                                <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
                            </svg>
                            <span class="text-sm font-medium text-white">Account</span>
                        </RouterLink>

                        <!-- Information -->
                        <RouterLink to="/info"
                            class="flex flex-col items-center justify-center p-6 transition duration-300 transform shadow-md bg-white/20 backdrop-blur-md rounded-xl hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2" class="w-10 h-10 mb-3 text-white">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" x2="12" y1="16" y2="12" />
                                <line x1="12" x2="12" y1="8" y2="8" />
                            </svg>
                            <span class="text-sm font-medium text-white">Information</span>
                        </RouterLink>

                        <!-- Password -->
                        <RouterLink to="/password"
                            class="flex flex-col items-center justify-center p-6 transition duration-300 transform shadow-md bg-white/20 backdrop-blur-md rounded-xl hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2" class="w-10 h-10 mb-3 text-white">
                                <rect x="3" y="11" width="18" height="11" rx="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <span class="text-sm font-medium text-white">Password</span>
                        </RouterLink>

                        <!-- Terms of Policy -->
                        <RouterLink to="/policy"
                            class="flex flex-col items-center justify-center p-6 transition duration-300 transform shadow-md bg-white/20 backdrop-blur-md rounded-xl hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2" class="w-10 h-10 mb-3 text-white">
                                <path d="M12 20h9" />
                                <path d="M12 4h9" />
                                <path d="M4 9h16" />
                                <path d="M4 15h16" />
                            </svg>
                            <span class="text-sm font-medium text-white">Terms of Policy</span>
                        </RouterLink>

                        <!-- Logout (Red Style) -->
                        <button @click="logout"
                            class="flex flex-col items-center justify-center p-6 transition duration-300 transform shadow-md bg-red-600/80 backdrop-blur-md rounded-xl hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2" class="w-10 h-10 mb-3 text-white">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1="21" y1="12" x2="9" y2="12" />
                            </svg>
                            <span class="text-sm font-medium text-white">Log Out</span>
                        </button>

                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

import { useRouter } from 'vue-router'
import getUser from '@/firebase/getUser'
// import useCollection from '@/firebase/useCollection'

export default {
    setup() {


        const router = useRouter()
        const { user } = getUser()

        // const {setDocs} = useCollection("customers")

        const handleRequestLoan = async () => {
            // const data = {
            //     // status: 2,
            //     amount: 0,
            // }
            if (user.value) {
                // await setDocs(data, user?.value?.uid)

                router.push('/loan')
            }
            else {
                router.push('/login')
            }
        }



        return {
            handleRequestLoan
        }
    }
}


</script>