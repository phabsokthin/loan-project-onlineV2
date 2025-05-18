<template>

    <div class="flex items-center justify-center min-h-screen hero-image" v-motion-fade>
        <div class="w-full max-w-md px-8 py-12">
            <form @submit.prevent="handleSubmit"
                class="p-8 bg-white shadow-lg bg-opacity-90 backdrop-blur-sm rounded-xl">
                <!-- Logo Section -->
                <div class="flex justify-center my-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="w-24 h-24 lucide lucide-user-plus">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="19" x2="19" y1="8" y2="14" />
                        <line x1="22" x2="16" y1="11" y2="11" />
                    </svg>
                </div>


                <div
                    class="flex items-center mx-4 my-6 transition-colors duration-300 border-b-2 border-gray-700 hover:border-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-user-icon lucide-user">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    <input v-model="form.userName" type="tel" autocomplete="tel" required 
                        class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none"
                        placeholder="Username" />
                </div>

                <div
                    class="flex items-center mx-4 my-6 transition-colors duration-300 border-b-2 border-gray-700 hover:border-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-mail-icon lucide-mail">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                    <input v-model="form.email" type="email" autocomplete="tel" required 
                        class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none"
                        placeholder="Email" />
                </div>

                <!-- Password Input -->
                <div
                    class="flex items-center mx-4 my-6 transition-colors duration-300 border-b-2 border-gray-700 hover:border-green-800">
                    <label class="self-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-lock-keyhole">
                            <circle cx="12" cy="16" r="1" />
                            <rect x="3" y="10" width="18" height="12" rx="2" />
                            <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                        </svg>
                    </label>
                    <input id="password" v-model="form.password" type="password" autocomplete="new-password" required
                        class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none" placeholder="Password" />
                </div>

                <!-- Confirm Password Input -->
                <div
                    class="flex items-center mx-4 my-6 transition-colors duration-300 border-b-2 border-gray-700 hover:border-green-800">
                    <label class="self-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-lock-keyhole">
                            <circle cx="12" cy="16" r="1" />
                            <rect x="3" y="10" width="18" height="12" rx="2" />
                            <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                        </svg>
                    </label>
                    <input id="confirm_password" v-model="form.confirm_password" type="password"
                        autocomplete="new-password" required
                        class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none"
                        placeholder="Confirm Password" />
                </div>

                <!-- Register Button -->
                <div class="mx-4 mt-8 mb-4">
                    <button type="submit" :disabled="loading"
                        class="flex items-center justify-center w-full py-3 font-medium text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <span v-if="loading" class="mr-2 loader"></span>
                        <span>{{ loading ? 'Registering...' : 'Register Account' }}</span>
                    </button>
                </div>

                <!-- Login Link -->
                <div class="mt-8">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 text-gray-500 bg-white bg-opacity-90">
                                Already have an account?
                            </span>
                        </div>
                    </div>
                </div>

                <div class="mx-4 mt-8 mb-4">
                    <RouterLink :to="{ name: 'login' }"
                        class="flex justify-center w-full py-3 font-medium text-black transition-colors duration-300 bg-white border-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Sign In
                    </RouterLink>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import useCollection from '@/firebase/useCollection';
import useSignUp from '@/firebase/useSignup'

export default {
    setup() {
        const form = ref({
            userName: '',
            email: '',
            password: '',
            confirm_password: ''
        });
        const loading = ref(false);
        const router = useRouter();

        const {signup} = useSignUp()

        const { setDocs } = useCollection('admins');


        const handleSubmit = async () => {

            const data = {
                userName: form.value.userName,
                email: form.value.email,
                password: form.value.password,
            };



            if (form.value.password !== form.value.confirm_password) {
                alert('Passwords do not match');
                return;
            }
            loading.value = true;
            try {
                const result = await signup(form.value.email, form.value.password);
                if (result.user?.uid) {

                    try {
                        const sign_success = await setDocs(data, result?.user?.uid);
                        if (sign_success) {
                            router.push({ path: '/login' });

                        }
                    }
                    catch (err) {

                        console.log(err)

                    }

                } else {
                    alert(result.error || 'Registration failed');
                }
            } finally {
                loading.value = false;
            }
        };

        return {
            form,
            loading,
            handleSubmit
        };
    },
};
</script>

<style scoped>
.hero-image {
    background-image: url("/src/assets/loan_chart.jpg");
    background-color: #cccccc;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.loader {
    border: 2px solid #f3f3f3;
    border-top: 2px solid #3498db;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    animation: spin 1s linear infinite;
    display: inline-block;
    vertical-align: middle;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>