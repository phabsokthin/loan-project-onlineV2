<template>
  <div class="flex items-center justify-center min-h-screen hero-image" v-motion-fade>
    <div class="w-full max-w-md px-6 py-10">
      <form @submit.prevent="handleLogin" class="items-center justify-center p-6 text-white rounded-xl">
        <!-- Logo Section -->
        <div class="flex justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-28 h-28 lucide lucide-circle-user">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
          </svg>
        </div>

        <!-- Welcome text -->
        <div class="mb-6 text-center">
          <h2 class="mb-2 text-lg font-semibold">Welcome!</h2>
          <p class="mb-8 text-sm">Please login your loan application.</p>
        </div>

        <!-- Phone Input -->
        <div class="mb-6">
          <label for="">Enter your Phone number</label>
          <input v-model="loginForm.phone"
            class="w-full px-4 py-3 text-gray-600 placeholder-gray-600 bg-white bg-opacity-50 rounded-md focus:outline-none"
            type="tel" placeholder="Phone Number" required>
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label for="">Enter your Password</label>
          <input v-model="loginForm.password"
            class="w-full px-4 py-3 text-gray-600 placeholder-gray-600 bg-white bg-opacity-50 rounded-md focus:outline-none"
            type="password" placeholder="Password" required>
        </div>

        <!-- Login Button -->
        <div class="mb-6">
          <button type="submit"
            class="w-full py-3 font-medium text-white bg-green-700 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-green-500">
            <span v-if="loading" class="mr-2 loader"></span>
            <span>{{ loading ? 'Signing in...' : 'Login' }}</span>
          </button>
        </div>

        <!-- Register Section -->
        <div class="mb-6 text-center">
          <p class="text-sm">
            Don’t have an account?

          </p>
          <p class="text-sm">
            <RouterLink :to="{ name: 'register' }" class="font-semibold text-white underline hover:text-green-200">
              Register Now
            </RouterLink>
          </p>
        </div >
        <div class="items-center justify-center mt-36 patner">

        </div>

      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginWithPhone } from '@/firebase/Auth';

export default {
  setup() {
    const loginForm = ref({ phone: '', password: '' });
    const loading = ref(false);
    const router = useRouter();

    const handleLogin = async () => {
      if (loading.value) return;
      loading.value = true;
      const result = await loginWithPhone(loginForm.value.phone, loginForm.value.password);
      if (result.user) {
        alert('Login successful!');
        router.push({ path: '/' });
      } else {
        alert("Incorrect phone or password. Try again!");
      }
      loading.value = false;
    };

    return { loginForm, loading, handleLogin };
  }
};
</script>

<style scoped>
.hero-image {
  background-image: url("/src/assets/bg1.png");
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.patner{
  background-image: url("/src/assets/partner.png");
  min-height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/* Loader spinner */
.loader {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #fff;
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
