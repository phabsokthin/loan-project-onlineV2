<template>
  <div class="min-h-screen px-4 py-4 m-auto back_image">
    <div class="w-full max-w-5xl mx-auto mt-10">
      <!-- Header -->
      <h2 class="flex items-center gap-2 p-3 mt-10 text-lg font-semibold text-white bg-black rounded-t-md">
        <RouterLink :to="{ name: 'home' }">
          <svg
            class="w-6 h-6"
            viewBox="0 0 7111 7111"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m5000 7111c-179 0-346-69-472-195l-2888-2889c-260-260-260-683 0-943l2888-2889c260-260 683-260 943 0s260 683 0 943l-2417 2418 2417 2417c260 260 260 683 0 943-125 126-293 195-471 195z"
              fill="#ffffff"
            />
          </svg>
        </RouterLink>
        <span>Change Password</span>
      </h2>
    </div>

    <!-- ✅ Card -->
    <div class="w-full max-w-5xl p-6 mx-auto mt-5 text-white rounded-md bg-black/50">
      <!-- Card Header -->
      <div class="flex items-center gap-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 11c0-1.105.895-2 2-2s2 .895 2 2v2h2a2 2 0 012 2v4a2 2 0 
               01-2 2H8a2 2 0 01-2-2v-4a2 2 0 012-2h2v-2c0-1.105.895-2 
               2-2z"
          />
        </svg>
        <h2 class="text-lg font-semibold">Update Your Password</h2>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleChangePassword" class="grid grid-cols-1 gap-6">
        <div>
          <label class="block mb-1 text-sm">Current Password</label>
          <input
            v-model="formData.currentPassword"
            type="password"
            placeholder="Enter current password"
            class="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400"
            required
          />
        </div>

        <div>
          <label class="block mb-1 text-sm">New Password</label>
          <input
            v-model="formData.newPassword"
            type="password"
            placeholder="Enter new password"
            class="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400"
            required
          />
        </div>

        <div>
          <label class="block mb-1 text-sm">Confirm New Password</label>
          <input
            v-model="formData.confirmPassword"
            type="password"
            placeholder="Confirm new password"
            class="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400"
            required
          />
        </div>

        <!-- Submit Button -->
        <div class="pt-6">
          <button
            v-if="!isLoanding"
            type="submit"
            class="w-full py-3 font-semibold text-white transition bg-yellow-500 rounded-full hover:bg-yellow-600"
          >
            Update Password
          </button>
          <button
            v-else
            disabled
            type="button"
            class="w-full py-3 font-semibold text-gray-200 bg-gray-600 rounded-full cursor-not-allowed"
          >
            Please wait...
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ChangePasswordView",
  setup() {
    const isLoanding = ref(false);
    const formData = ref({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    const handleChangePassword = async () => {
      try {
        isLoanding.value = true;

        if (formData.value.newPassword !== formData.value.confirmPassword) {
          alert("New password and confirm password do not match!");
          return;
        }

        // TODO: Add Firebase or API call here to update password
        console.log("Password updated:", formData.value);

        alert("Password updated successfully!");
      } catch (err) {
        console.error(err);
      } finally {
        isLoanding.value = false;
      }
    };

    return { formData, isLoanding, handleChangePassword };
  },
};
</script>

<style scoped>
.back_image {
  background-image: url("/src/assets/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
</style>
