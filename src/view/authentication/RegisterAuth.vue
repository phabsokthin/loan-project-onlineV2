<template>
  <div class="flex items-center justify-center min-h-screen hero-image">
    <!-- Register Card -->
    <div class="w-full max-w-md px-4 py-10">
      <form @submit.prevent="handleSubmit" class="p-8 rounded-xl bg-opacity-90">
        <!-- Logo Section -->
        <div class="flex justify-center mb-4">
          <img :src="userIcon" alt="user icon " class="w-28 h-28 object-contain">
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
        <div class="mb-6">
          <label class="block mb-2 text-sm text-white">Verification Code</label>
          <div class="flex items-center space-x-3">
            <input v-model="form.verification_code" type="text" maxlength="6" required
              class="flex-grow py-3 px-4 rounded-md text-white placeholder-white 
                     bg-white bg-opacity-30 border border-white border-opacity-40
                     focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur-sm"
              placeholder="Enter Code" />

            <div class="h-12 w-28 rounded-md overflow-hidden shadow-md bg-white flex items-center justify-center">
              <img src="@/assets/fcode.png" alt="captcha" class="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <!-- Register Button -->
        <div class="mb-6">
          <button type="submit" :disabled="loading"
            class="w-full py-3 font-semibold text-white bg-green-700 bg-opacity-90 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur-sm">
            <span v-if="loading" class="mr-2 loader"></span>
            <span>{{ loading ? 'Registering...' : 'Register' }}</span>
          </button>
        </div>

        <!-- Login Link -->
        <div class="text-center">
          <p class="text-sm text-white">Already have an account?</p>
          <RouterLink :to="{ name: 'login' }"
            class="text-sm font-semibold underline hover:text-green-300">
            Login
          </RouterLink>
        </div>
      </form>
    </div>

    <!-- Partner Logos Footer -->
     <!-- Partner Logos Footer -->
    <div class="partner-footer">
      <img :src="partnerLogo" alt="Partners" class="h-14 mx-auto opacity-100" />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { registerWithPhone } from '@/firebase/Auth';
import useCollection from '@/firebase/useCollection';
import { timestamp } from '@/config/config';
import partnerLogo from '@/assets/partner.png';
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

// For hiding and showing the partner footer
const showPartnerFooter = ref(false);
let lastScrollPosition = 0;

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

// Scroll event to detect scrolling direction
const onScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition < lastScrollPosition) {
    // User scrolled up, show the footer
    showPartnerFooter.value = true;
  } else {
    // User scrolled down, hide the footer
    showPartnerFooter.value = false;
  }

  lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition; // Reset if at the top
};

// Adding the scroll event listener when the component mounts
onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

// Removing the event listener when the component unmounts
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>


<style scoped>
.hero-image {
  background-image: url("/src/assets/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

/* Footer logos */
.partner-footer {
  position:fixed;
  bottom: 0;
  width: 100%;
  height: 65px;
  padding: 8px 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  text-align: center;
}

.code_input {
  background-image: url("/src/assets/Verification\ Code.png");
  width: 150px;
  height: 50px;
  background-position: center;
  border-radius: 5px;
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
