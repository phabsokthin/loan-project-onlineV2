<template>

  <div class="min-h-screen px-4 py-4 m-auto back_image">
    <div class="w-full max-w-5xl mx-auto mt-10">
      <!-- Header -->
      <h2 class="flex items-center gap-2 p-3 mt-10 text-lg font-semibold text-white bg-black rounded-t-md">
        <button @click="$router.back()">
          <svg class="w-6 h-6" viewBox="0 0 7111 7111" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m5000 7111c-179 0-346-69-472-195l-2888-2889c-260-260-260-683 0-943l2888-2889c260-260 683-260 943 0s260 683 0 943l-2417 2418 2417 2417c260 260 260 683 0 943-125 126-293 195-471 195z"
              fill="#ffffff" />
          </svg>
        </button>
        <span>Personal Profile</span>
      </h2>
    </div>

    <!-- ✅ Card -->
    <div class="w-full max-w-5xl p-6 mx-auto mt-5 text-white rounded-md bg-black/50" v-motion-fade>
      <!-- Card Header -->
      <div class="flex items-center gap-2 mb-6">
        <svg version="1.1" id="Layer_1" class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          viewBox="0 0 468.179 468.179" xml:space="preserve">
          <g>
            <path
              d="M332.587,226.233C307.597,257.701,272.755,276,234.09,276c-39.772,0-74.273-19.264-98.496-49.767
              C83.66,259.029,49.09,316.93,49.09,382.763c0,19.942,10.92,47.734,62.942,66.889c32.45,11.948,75.798,18.527,122.058,18.527
              c46.26,0,89.607-6.579,122.058-18.527c52.023-19.154,62.942-46.946,62.942-66.889C419.09,316.93,384.52,259.029,332.587,226.233z"
              fill="#ffffff" />
            <path d="M234.09,246c58.304,0,103.2-56.357,103.2-123c0-66.672-44.919-123-103.2-123c-58.304,0-103.2,56.357-103.2,123
              C130.89,189.672,175.81,246,234.09,246z" fill="#ffffff" />
          </g>
        </svg>
        <h2 class="text-lg font-semibold">Personal Info</h2>
      </div>

      <!-- Form when no data -->
      <form v-if="!userDoc?.maritalStatus" @submit.prevent="handleSubmitInfo"
        class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <label class="block mb-1 text-sm">Marital Status: *</label>
          <input v-model="formData.maritalStatus" type="text" placeholder="Marital Status"
            class="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400"
            required />
        </div>

        <div>
          <label class="block mb-1 text-sm">Current Address: *</label>
          <input v-model="formData.address" type="text" placeholder="Current Address"
            class="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400"
            required />
        </div>

        <div>
          <label class="block mb-1 text-sm">Monthly Income: *</label>
          <input v-model="formData.income" type="number" placeholder="Monthly Income"
            class="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400"
            required />
        </div>

        <div>
          <label class="block mb-1 text-sm">Loan Purpose: *</label>
          <input v-model="formData.loanPurpose" type="text" placeholder="Loan Purpose"
            class="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400"
            required />
        </div>

        <!-- Submit Button -->
        <div class="pt-6 lg:col-span-2">
          <button v-if="!isLoanding" type="submit"
            class="w-full py-3 font-semibold text-white transition bg-yellow-500 rounded-full hover:bg-yellow-600">
            Submit
          </button>
          <button v-else disabled type="button"
            class="w-full py-3 font-semibold text-gray-200 bg-gray-600 rounded-full cursor-not-allowed">
            Please wait...
          </button>
        </div>
      </form>

      <!-- If Data Exists -->
      <div v-else class="space-y-6">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <p class="flex justify-between"><strong>Marital Status:</strong> <span class="underline capitalize ">{{
            userDoc.maritalStatus }}</span></p>
          <p class="flex justify-between"><strong>Current Address:</strong> <span class="underline capitalize">{{
            userDoc.address }}</span></p>
          <p class="flex justify-between"><strong>Monthly Income:</strong> <span class="underline capitalize">{{
            userDoc.income }}</span></p>
          <p class="flex justify-between"><strong>Loan Purpose:</strong> <span class="underline capitalize">{{
            userDoc.loanPurpose }}</span></p>
        </div>
        <div class="flex justify-end ">
          <div class="px-4 py-2 font-bold text-white rounded bg-green-500/60 hover:bg-green-600">
            <RouterLink to="/identifyPicture" class="flex gap-2">
              <span>Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-move-right-icon lucide-move-right">
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </RouterLink>
          </div>
        </div>
        <!-- <button
          @click="handleNext"
          class="w-full py-3 mt-6 font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
        >
          Next
        </button> -->
      </div>
    </div>
  </div>
</template>


<script>

import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import useCollection from "@/firebase/useCollection";
import getUser from "@/firebase/getUser";
import getColectionQuryTerms from "@/firebase/getCollectionQueryTerm";
import { documentId, where } from "firebase/firestore";

export default {

  name: "PersonalInforView",
  props: { data: { type: Object, required: true } },

  setup(props) {
    const router = useRouter();
    const isLoanding = ref(false);

    // ✅ Form data
    const formData = ref({
      maritalStatus: "",
      address: "",
      income: "",
      loanPurpose: "",
    });

    const userDoc = ref(null);

    // ✅ Firebase composables
    const { updateDocs } = useCollection("customers");
    const { user } = getUser();

    // ✅ Watch user to load Firestore data
    watch(
      () => user.value?.uid,
      async (newUid) => {
        if (newUid) {
          const { documents } = await getColectionQuryTerms(
            "customers",
            where(documentId(), "==", newUid)
          );
          watch(() => {
            userDoc.value = documents.value?.[0] || null;
          });
        }
      },
      { immediate: true }
    );

    // ✅ Save to Firestore
    const handleSubmitInfo = async () => {
      try {
        isLoanding.value = true;
        const updatedData = {
          maritalStatus: formData.value.maritalStatus,
          address: formData.value.address,
          income: formData.value.income,
          loanPurpose: formData.value.loanPurpose,
          loan_completed: '',
        };

        await updateDocs(user?.value?.uid, updatedData);

        userDoc.value = updatedData; // update UI
        isLoanding.value = false;

        // router.push({
        //   path: "/baneficicary",
        //   query: { data: JSON.stringify(props.data) },
        // });
      } catch (err) {
        console.error(err);
      } finally {
        isLoanding.value = false;
      }
    };

    // ✅ Next step
    const handleNext = () => {
      router.push({
        path: "/baneficicary",
        query: { data: JSON.stringify(props.data) },
      });
    };

   
    return { formData, handleSubmitInfo, isLoanding, userDoc, handleNext };
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
