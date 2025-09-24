<template>
  <div class="flex flex-col items-center justify-center min-h-screen hero-image">
    <!-- Register Card -->
    <div class="w-full max-w-md px-8 py-10 bg-white bg-opacity-10 rounded-lg shadow-lg">
      <form @submit.prevent="handleSubmit" class="text-white">
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
        <div class="mb-4">
          <label class="block mb-2 text-sm text-white">Enter your phone number</label>
          <input v-model="form.phone" type="tel" maxlength="10" required
            class="input-style"
            placeholder="Phone Number" />
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <label class="block mb-2 text-sm text-white">Create your own password</label>
          <input v-model="form.password" type="password" required
            class="input-style"
            placeholder="Password" />
        </div>

        <!-- Confirm Password -->
        <div class="mb-4">
          <label class="block mb-2 text-sm text-white">Confirm Password</label>
          <input v-model="form.confirm_password" type="password" required
            class="input-style"
            placeholder="Confirm Password" />
        </div>

        <!-- Verification Code -->
       <div class="mb-6">
        <label class="block mb-2 text-sm text-white">Verification Code</label>
        <div class="flex items-center space-x-3">
            <!-- Input -->
            <input v-model="form.verification_code" type="text" maxlength="6" required
            class="flex-grow py-3 px-4 rounded-md text-white placeholder-white 
                    bg-white bg-opacity-30 border border-white border-opacity-40
                    focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur-sm"
            placeholder="Enter Code" />

            <!-- Captcha Image -->
            <div class="h-12 w-28 rounded-md overflow-hidden shadow-md bg-white flex items-center justify-center">
            <img src="@/assets/fcode.png" alt="captcha" class="w-full h-full object-contain" />
            </div>
        </div>
        </div>

        <!-- Register Button -->
        <div class="mb-6">
          <button type="submit" :disabled="loading"
            class="btn-green">
            <span v-if="loading" class="mr-2 loader"></span>
            <span>{{ loading ? 'Signing up...' : 'Register' }}</span>
          </button>
        </div>

        <!-- Login Link -->
        <div class="text-center">
          <p class="text-sm">Already have an account?</p>
          <RouterLink :to="{ name: 'login' }"
            class="text-sm font-semibold underline hover:text-green-300">
            Login
          </RouterLink>
        </div>
      </form>
    </div>

    <!-- Partner Logos Footer -->
    <footer class="partner-footer">
        <div class="container mx-auto flex justify-center items-center">
            <img src="@/assets/partner.png" alt="partner logos" class="h-14 opacity-100" />
        </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerWithPhone } from '@/firebase/Auth';
import useCollection from '@/firebase/useCollection';
import { timestamp } from '@/config/config';
import userIcon from '@/assets/person.png';

const form = ref({
  phone: '',
  password: '',
  confirm_password: '',
  verification_code: ''
});
const loading = ref(false);
const router = useRouter();

const { setDocs } = useCollection('users');
const { setDocs: setDocsData } = useCollection('customers');

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
      const clientData = { amount: 0 };
      try {
        const sign_success = await setDocs(data, result.user.uid);
        await setDocsData(clientData, result.user.uid);
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
  background-image: url("@/assets/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment:fixed;
}

/* Inputs */
.input-style {
  @apply w-full py-3 px-4 rounded-md text-gray-500 placeholder-white 
         bg-gray-400 bg-opacity-30 border border-white border-opacity-40
         focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur-sm;
}

/* Buttons */
.btn-green {
  @apply w-full py-3 font-semibold text-white bg-green-700 bg-opacity-90 
         rounded-md hover:bg-green-600 focus:outline-none 
         focus:ring-2 focus:ring-green-500 backdrop-blur-sm;
}

/* Partner logos footer */
.partner-footer {
  position: absolute;       /* stays at the bottom of the screen */
  bottom: -20%;
  left: 0;
  width: 100%;
  height: 60px;          /* same height as your main footer bar */
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;           /* make sure it's on top */
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
