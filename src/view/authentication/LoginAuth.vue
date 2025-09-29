<template>
  <div class="flex items-center justify-center min-h-screen hero-image" v-motion-fade>
    <div class="w-full max-w-md px-6 py-10">
      <form @submit.prevent="handleLogin" class="items-center justify-center p-6 text-white rounded-xl">
        <!-- Logo Section -->
        <div class="flex justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-[140px]">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </div>

        <div class="mb-4 text-center text-white">
          <h2 class="mb-2 text-xl font-semibold">Welcome!</h2>
          <p class="mb-4 text-md">Please register your loan application.</p>
        </div>
        <!-- Phone Input -->
        <div class="mb-6">
          <label for="phone">Enter your Phone number</label>
          <input v-model="loginForm.phone"
            class="w-full px-4 py-3 text-gray-600 placeholder-gray-600 bg-white bg-opacity-50 rounded-md focus:outline-none"
            type="tel" placeholder="Phone Number" required>
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label for="password">Enter your Password</label>
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
          <p class="text-sm">Don’t have an account?</p>
          <RouterLink :to="{ name: 'register' }" class="text-sm font-semibold underline hover:text-green-300">
            Register Now
          </RouterLink>
        </div>
      </form>
    </div>

    <!-- Partner Logos Footer -->
    <div class="partner-footer">
      <img :src="partnerLogo" alt="Partners" class="mx-auto opacity-100 h-14" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginWithPhone } from '@/firebase/Auth';
import partnerLogo from '@/assets/partner.png';
// import userIcon from '@/assets/person.png'; // This is now used in the template

// Form and loading state
const loginForm = ref({ phone: '', password: '' });
const loading = ref(false);
const router = useRouter();

// Login handler
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
</script>

<style scoped>
.hero-image {
  background-image: url("/src/assets/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.partner-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 65px;
  padding: 8px 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  text-align: center;
}

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
