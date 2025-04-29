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

                <!-- Phone Input -->
                <div
                    class="flex items-center mx-4 my-6 transition-colors duration-300 border-b-2 border-gray-700 hover:border-green-800">
                    <label class="self-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-phone">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </label>
                    <input id="phone" v-model="form.phone" type="tel" autocomplete="tel" required maxlength="10"
                        class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none"
                        placeholder="Phone Number" />
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
import { registerWithPhone } from '@/firebase/Auth';
import useCollection from '@/firebase/useCollection';

export default {
    setup() {
        const form = ref({
            phone: '',
            password: '',
            confirm_password: ''
        });
        const loading = ref(false);
        const router = useRouter();

        const { setDocs } = useCollection('users');


        const handleSubmit = async () => {

            const data = {
                phone: form.value.phone,
                password: form.value.password,
                email: form.value.phone+"@gmail.com",            };
            // Validate phone number: must be 8, 9, or 10 digits
            const phonePattern = /^\d{9,10}$/;
            if (!phonePattern.test(form.value.phone)) {
                alert('Phone number must be 9, or 10 digits');
                return;
            }
            if (form.value.password !== form.value.confirm_password) {
                alert('Passwords do not match');
                return;
            }
            loading.value = true;
            try {
                const result = await registerWithPhone(form.value.phone, form.value.password);
                if (result.user?.uid) {

                    try {
                        const sign_success = await setDocs(data, result?.user?.uid);
                        if (sign_success) {
                            router.push({ path: '/' });
                           
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