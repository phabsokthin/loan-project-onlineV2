<template>
  <div class="flex items-center justify-center min-h-screen bg-blue-600">
    <div class="flex w-full max-w-4xl overflow-hidden bg-white shadow-lg rounded-2xl">
      
      <!-- Left: Login Form (always visible) -->
      <div class="w-full px-6 py-10 md:w-1/2 md:px-10 md:py-12">
        <h2 class="mb-8 text-2xl font-semibold text-gray-800">Login</h2>
        
        <!-- Email -->
        <div class="mb-6">
          <input
            v-model="loginForm.email"
            type="email"
            placeholder="Email"
            required
            class="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        
        <!-- Password -->
        <div class="mb-6">
          <input
            v-model="loginForm.password"
            type="password"
            placeholder="Password"
            required
            class="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        
        <!-- Remember + Forgot -->
        <div class="flex items-center justify-between mb-6 text-sm">
          <label class="flex items-center space-x-2">
            <input type="checkbox" v-model="rememberMe" class="text-blue-600 rounded focus:ring-blue-500"/>
            <span>Remember me</span>
          </label>
          <a href="#" class="text-blue-600 hover:underline">Forgot password?</a>
        </div>
        
        <!-- Button -->
        <button
          type="submit"
          @click.prevent="handleLogin"
          class="w-full py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
        >
          <span v-if="loading">Logging in...</span>
          <span v-else>Login</span>
        </button>
      </div>

      <!-- Right: Illustration & Text (hidden on mobile, visible on md+) -->
      <div class="flex-col items-center justify-center hidden w-1/2 px-10 py-12 text-center bg-gray-50 md:flex">
        <img src="@/assets/login.webp" alt="Login Illustration" class="w-64 mb-6" />
        <h3 class="mb-4 text-xl font-semibold text-gray-800">Check Your Project Progress</h3>
        <p class="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque efficitur nisl ut elit commodo, ut posuere urna porttitor.
        </p>
      </div>
    </div>
  </div>
</template>



<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useLogin from '@/firebase/useLogin';


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

.image-login{
    background-image: url("");
    min-height: 50px;
    background-position: "center";
    background-repeat: "no-repeat";
    background-size: "cover";
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