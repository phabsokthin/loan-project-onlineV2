<template>
  <div class="flex items-center justify-center min-h-screen hero-image">
    <!-- Register Card -->
    <div class="w-full max-w-md px-4 py-10" v-motion-fade>
      <form @submit.prevent="handleSubmit" class="p-8 rounded-xl bg-opacity-90" >

        <!-- Logo Section -->
        <div class="flex justify-center mb-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-[140px]">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </div>

        <!-- Welcome text -->
        <div class="mb-4 text-center text-white">
          <h2 class="mb-2 text-lg font-semibold">Welcome!</h2>
          <p class="mb-4 text-sm">Please register your loan application.</p>
        </div>

        <!-- Phone Input -->
        <div class="mb-4">
          <label for="phone" class="block mb-1 text-sm text-white">Enter your phone number</label>
          <input id="phone" v-model="form.phone"
            class="w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-white bg-opacity-50 rounded-md focus:outline-none"
            placeholder="Phone Number" required>
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block mb-1 text-sm text-white">Create your own password</label>
          <input id="password" type="password" v-model="form.password"
            class="w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-white bg-opacity-50 rounded-md focus:outline-none"
            placeholder="Password" required>
        </div>

        <!-- Confirm Password Input -->
        <div class="mb-4">
          <label for="confirm_password" class="block mb-1 text-sm text-white">Confirm Password</label>
          <input id="confirm_password" type="password" v-model="form.confirm_password"
            class="w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-white bg-opacity-50 rounded-md focus:outline-none"
            placeholder="Confirm Password" required>
        </div>

        <!-- Verification Code -->
        <div class="mt-5 mb-4">
          <label for="verification" class="block mb-1 text-sm text-white">Verification Code</label>
          <div class="flex items-center gap-3">
            <input id="verification" v-model="form.verification"
              class="w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-white bg-opacity-50 rounded-md focus:outline-none"
              placeholder="Verification Code" required>
            <div class="block mb-1 text-sm text-white code_input">
              <button type="button">55565</button>
            </div>
          </div>
        </div>

        <!-- Register Button -->
        <div class="mb-4">
          <button type="submit" :disabled="loading"
            class="flex items-center justify-center w-full py-3 font-medium text-white transition-colors duration-300 bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            <span v-if="loading" class="mr-2 loader"></span>
            <span>{{ loading ? 'Registering...' : 'Register' }}</span>
          </button>
        </div>

        <!-- Login Link -->
        <div class="text-center">
          <p class="text-sm text-white">Already have an account?</p>
          <RouterLink :to="{ name: 'login' }" class="text-sm font-semibold text-white underline hover:text-green-300">
            Login
          </RouterLink>
        </div>
      </form>
    </div>
  </div>

  <!-- Partner Logos Footer -->
  <div class="partner-footer">
    <img :src="partnerLogo" alt="Partners" class="mx-auto opacity-100 h-14" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerWithPhone } from '@/firebase/Auth';
import useCollection from '@/firebase/useCollection';
import { timestamp } from '@/config/config';
import partnerLogo from '@/assets/partner.png';


const form = ref({
  phone: '',
  password: '',
  confirm_password: '',
  verification: ''
});

const loading = ref(false);
const router = useRouter();
const { setDocs } = useCollection('users');
const { setDocs: setDocsData } = useCollection('customers');
const { setDocs: setDataWithdrawLoan } = useCollection('withdrawLoan');

const handleSubmit = async () => {
  const phonePattern = /^\d{9,10}$/;
  if (!phonePattern.test(form.value.phone)) {
    alert('Phone number must be 9 or 10 digits');
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
      const data = {
        phone: form.value.phone,
        password: form.value.password,
        email: form.value.phone + "@gmail.com",
        createdAt: timestamp(),
      };

         const loanWithdrawStatus = {
                status: '2'
            }
      const clientData = {loan_completed: '' };
      try {
        const sign_success = await setDocs(data, result.user.uid);
        await setDocsData(clientData, result.user.uid);
        await setDataWithdrawLoan(loanWithdrawStatus, result.user.uid);
        if (sign_success) router.push({ path: '/' });
      } catch (err) {
        console.error(err);
      }
    } else {
      alert(result.error || 'Registration failed');
    }
  } finally {
    loading.value = false;
  }
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

.code_input {
  background-image: url("/src/assets/Verification\ Code.png");
  width: 150px;
  height: 50px;
  background-position: center;
  border-radius: 5px;
}

.partner-footer {
  position: fixed;
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
