<template>
    <div class="flex items-center justify-center min-h-screen hero-image" v-motion-fade>
        <div class="w-full max-w-md px-8 py-12">
            <form @submit.prevent="handleLogin"
                class="p-8 bg-white shadow-lg bg-opacity-90 backdrop-blur-sm rounded-xl">
                <!-- Logo Section -->
                <div class="flex justify-center my-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="w-24 h-24 lucide lucide-circle-user">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="10" r="3" />
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                    </svg>
                </div>

                <!-- email Input -->
                <div
                    class="flex items-center mx-4 my-6 transition-colors duration-300 border-b-2 border-gray-700 hover:border-green-800">
                    <label class="self-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-mail-icon lucide-mail">
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                        </svg>
                    </label>
                    <input v-model="loginForm.email" class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none"
                        type="email" placeholder="Email" required>
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
                    <input v-model="loginForm.password"
                        class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none" type="password"
                        placeholder="Password" required>
                </div>

                <!-- Login Button -->
                <div class="mx-4 mt-8 mb-4">
                    <button type="submit"
                        class="w-full py-3 font-medium text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">

                        <span v-if="loading" class="mr-2 loader"></span>
                        <span>{{ loading ? 'Logging in...' : 'LOGIN' }}</span>
                    </button>
                </div>
                <!-- <div class="mt-8">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 text-gray-500 bg-white bg-opacity-90">
                                Don't have an account?
                            </span>
                        </div>
                    </div>
                </div>

                <div class="mx-4 mt-8 mb-4">
                    <RouterLink :to="{ name: 'register' }"
                        class="flex justify-center w-full py-3 font-medium text-black transition-colors duration-300 bg-white border-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Register
                    </RouterLink>
                </div> -->
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useLogin from '@/firebase/useLogin'

export default {
    setup() {
        const loginForm = ref({
            email: '',
            password: ''
        });
        const loading = ref(false);
        const router = useRouter();

        const { signIn } = useLogin()




        const handleLogin = async () => {
            try {
                if (loading.value) return;

                loading.value = true;

                const result = await signIn(loginForm.value.email, loginForm.value.password);

                if (result) {
                    alert('Login admin successful!');
                } 

                router.push('/admin');
            } catch (err) {
                alert("Incorrect email or password. Try again!");
                console.error(err);
            } finally {
                loading.value = false;
            }
        };

        return {
            loginForm,
            loading,
            handleLogin
        };
    }
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

/* Simple loader spinner */
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