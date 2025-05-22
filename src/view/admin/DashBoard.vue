<template>
    <!-- component -->
    <main class="w-full">
        <h1 class="flex items-center gap-2 my-5 font-mono text-2xl font-bold text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard">
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            <span>Dashboard</span>
        </h1>

        <!-- CONTENT GOES HERE -->
        <div class="flex flex-col w-full h-full mx-auto space-y-6">
            <section class="flex flex-col w-full p-6 mx-auto space-y-6 bg-white rounded-lg shadow-md">
                <!-- <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    <form class="relative flex flex-col md:col-span-3">
                        <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#5f6368">
                                <path
                                    d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="block w-full p-4 text-sm text-gray-900 border border-gray-100 rounded ps-10 bg-gray-50" placeholder="
                            Search here..." required />
                        <button type="submit"
                            class="text-blue-500 absolute end-2.5 top-1.5 border border-blue-500 hover:bg-blue-50 focus:outline-none font-medium rounded text-base px-4 py-2">Search</button>
                    </form>
                    <div class="flex items-center col-span-1">
                        <button
                            class="relative items-center justify-center px-4 py-2 font-medium text-white bg-blue-500 rounded w-80 hover:bg-primary-900">
                            New facility
                        </button>
                    </div>
                </div> -->


                <div class="grid w-full min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    <!-- In use -->
                    <div class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow">
                        <div class="flex flex-col items-center space-y-2">
                            <div class="text-4xl font-bold leading-none tracking-tight text-blue-500">{{ users?.length
                            }}</div>
                            <div class="font-mono text-lg font-medium text-blue-500">Member Registered</div>
                        </div>
                    </div>
                    <!-- renovation -->
                    <div class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow">
                        <div class="flex flex-col items-center space-y-2">
                            <div class="text-4xl font-bold leading-none tracking-tight text-green-500">{{
                                countUserApproved }}</div>
                            <div class="font-mono text-lg font-medium text-green-600">Loan Applied</div>
                        </div>
                    </div>
                    <!-- Suspended -->
                    <div class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow">
                        <div class="flex flex-col items-center space-y-2">
                            <div class="text-4xl font-bold leading-none tracking-tight text-red-500">{{ totalAmount }}
                            </div>
                            <div class="font-mono text-lg font-medium text-red-600">Lending Amount</div>
                        </div>
                    </div>
                    <!-- Closed -->
                    <div class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow">
                        <div class="flex flex-col items-center space-y-2">
                            <div class="text-4xl font-bold leading-none tracking-tight text-primary-900">{{
                                customers?.length }}</div>
                            <div class="font-mono text-lg font-medium text-primary-900">All Members</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import getCollection from '@/firebase/getCollection'
import { computed } from 'vue'

export default {
    setup() {
        const { document: customers } = getCollection('customers')
        const { document: users } = getCollection('users')

        const countUserApproved = computed(() => {
            return customers.value?.filter(user => user.status === '1').length || 0
        })


        const totalAmount = computed(() => {
            return customers.value?.reduce((sum, user) => {
                return sum + (Number(user.amount) || 0)
            }, 0) || 0
        })

        return { customers, users, countUserApproved, totalAmount }
    }
}
</script>
