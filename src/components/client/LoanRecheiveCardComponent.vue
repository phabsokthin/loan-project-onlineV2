<template>
  <div class="max-w-4xl px-6 mx-auto mb-10 mt-10 lg:mb-0">
    <section>
      <div class="container mx-auto">
        <div class="grid grid-cols-3 gap-6 text-center">

          <!-- Wallet -->
          <RouterLink to="/wallet"
            class="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-800 bg-opacity-40 hover:bg-opacity-60 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-2 text-white" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24">
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M16 7h.01" />
            </svg>
            <span class="text-sm text-white">Wallet</span>
          </RouterLink>

          <!-- Account -->
          <a href="#link_account"
            class="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-800 bg-opacity-40 hover:bg-opacity-60 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-2 text-white" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21a9 9 0 0 1 13 0" />
            </svg>
            <span class="text-sm text-white">Account</span>
          </a>

          <!-- Information -->
          <RouterLink to="/info"
            class="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-800 bg-opacity-40 hover:bg-opacity-60 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-2 text-white" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
            <span class="text-sm text-white">Information</span>
          </RouterLink>

          <!-- Password -->
          <RouterLink to="/password"
            class="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-800 bg-opacity-40 hover:bg-opacity-60 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-2 text-white" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span class="text-sm text-white">Password</span>
          </RouterLink>

          <!-- Terms -->
          <RouterLink to="/terms"
            class="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-800 bg-opacity-40 hover:bg-opacity-60 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-2 text-white" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24">
              <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20" />
              <path d="M4 4h16v16H6.5A2.5 2.5 0 0 1 4 17.5V4z" />
            </svg>
            <span class="text-sm text-white">Terms of Policy</span>
          </RouterLink>

          <!-- Logout -->
          <button @click="handleLogout"
            class="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-800 bg-opacity-40 hover:bg-opacity-60 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-2 text-red-500" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span class="text-sm text-red-500">Log out</span>
          </button>

        </div>
      </div>
    </section>
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