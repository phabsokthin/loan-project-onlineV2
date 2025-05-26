<template>
    <!-- component -->
    <main class="w-full">
        <h1 class="flex items-center gap-2 my-5 font-mono text-2xl font-bold text-black">
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
              

                <div class="grid w-full min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    <!-- In use -->
                    <div class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow">
                        <div class="flex flex-col items-center space-y-2">
                            <div class="text-4xl font-bold leading-none tracking-tight text-blue-500">{{ users?.length
                            }}</div>
                            <div class="flex gap-2 font-mono text-lg font-medium text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                <span>Member Registered</span></div>
                        </div>
                    </div>
                    <!-- renovation -->
                    <div class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow">
                        <div class="flex flex-col items-center space-y-2">
                            <div class="text-4xl font-bold leading-none tracking-tight text-green-500">{{
                                countUserApproved }}</div>
                            <div class="flex gap-2 font-mono text-lg font-medium text-green-600">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check-icon lucide-user-check"><path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></span>
                                <span>Loan Applied</span></div>
                        </div>
                    </div>
                    <!-- Suspended -->
                    <div class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow">
                        <div class="flex flex-col items-center space-y-2">
                            <div class="text-4xl font-bold leading-none tracking-tight text-red-500">{{ totalAmount }}
                            </div>
                            <div class="flex items-center gap-2 font-mono text-lg font-medium text-red-600">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-russian-ruble-icon lucide-russian-ruble"><path d="M6 11h8a4 4 0 0 0 0-8H9v18"/><path d="M6 15h8"/></svg></span>
                                <span>Lending Amount</span></div>
                        </div>
                    </div>
                    <!-- Closed -->
                    <div class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow">
                        <div class="flex flex-col items-center space-y-2">
                            <div class="text-4xl font-bold leading-none tracking-tight text-primary-900">{{
                                countUserUnderView }}</div>
                            <div class="flex items-center gap-2 font-mono text-lg font-medium text-primary-900">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-check-icon lucide-search-check"><path d="m8 11 2 2 4-4"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></span>
                                <span>Under View</span></div>
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

          const countUserUnderView = computed(() => {
            return customers.value?.filter(user => user.status === '0').length || 0
        })

        const totalAmount = computed(() => {
            return customers.value?.reduce((sum, user) => {
                return sum + (Number(user.amount) || 0)
            }, 0) || 0
        })

        return { customers, users, countUserApproved, totalAmount,countUserUnderView }
    }
}
</script>
