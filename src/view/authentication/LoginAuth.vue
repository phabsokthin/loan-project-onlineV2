<template>
  <div class="flex flex-col items-center justify-center min-h-screen hero-image">
    <!-- Login Card -->
    <div class="w-full max-w-md px-6 py-8 bg-white bg-opacity-10 rounded-lg shadow-lg ">
      <form @submit.prevent="handleLogin" class="text-white">
        <!-- Logo Section -->
        <!-- Logo Section -->
        <div class="flex justify-center mb-3">
            <img :src="userIcon" alt="User Icon" class="w-20 h-20 object-contain" />
        </div>

        <!-- Welcome text -->
        <div class="mb-8 text-center">
          <h2 class="text-lg font-semibold">Welcome!</h2>
          <p class="text-sm">Please login your loan application.</p>
        </div>

        <!-- Phone Input -->
        <div class="mb-6">
          <label class="block mb-2 text-sm text-white">Enter your phone number</label>
          <input v-model="loginForm.phone"
            class="w-full px-4 py-3 text-white placeholder-white 
                   bg-white bg-opacity-30 border border-white border-opacity-40 
                   rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 
                   backdrop-blur-sm"
            type="tel" placeholder="Phone Number" required />
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label class="block mb-2 text-sm text-white">Enter your own password</label>
          <input v-model="loginForm.password"
            class="w-full px-4 py-3 text-white placeholder-white 
                   bg-white bg-opacity-30 border border-white border-opacity-40 
                   rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 
                   backdrop-blur-sm"
            type="password" placeholder="Password" required />
        </div>

        <!-- Login Button -->
        <div class="mb-6">
          <button type="submit"
            class="w-full py-3 font-semibold text-white bg-green-700 bg-opacity-90 
                   rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 
                   focus:ring-green-500 backdrop-blur-sm">
            <span v-if="loading" class="mr-2 loader"></span>
            <span>{{ loading ? 'Signing in...' : 'Login' }}</span>
          </button>
        </div>

        <!-- Register Section -->
        <div class="mb-6 text-center">
          <p class="text-sm">Don’t have an account?</p>
          <RouterLink :to="{ name: 'register' }" 
            class="text-sm font-semibold underline hover:text-green-300">
            Register Now
          </RouterLink>
        </div>
      </form>
    </div>

    <!-- Partner Logos Footer -->
    <div class="partner-footer">
      <img :src="partnerLogo" alt="Partners" class="h-14 mx-auto opacity-100" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginWithPhone } from '@/firebase/Auth';
import partnerLogo from '@/assets/partner.png';
import userIcon from '@/assets/person.png'; 

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
    alert('Incorrect phone or password. Try again!');
  }
  loading.value = false;
};
</script>

<style scoped>
.hero-image {
  background-image: url("@/assets/background.png"); /* scenic bg */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

/* Footer logos */
.partner-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding: 8px 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  text-align: center;
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
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
