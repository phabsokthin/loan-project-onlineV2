<template>
  <!-- ✅ Navbar -->
  <div class="hidden lg:block">
    <NavbarComponent />
  </div>
  <div class="lg:hidden">
    <MobileView />
  </div>

  <div class="px-4 py-4 m-auto min-h-screen back_image">
    <div class="w-full max-w-5xl mx-auto mt-10">
      <!-- Header -->
      <h2 class="flex items-center gap-2 p-3 text-lg font-semibold text-white bg-black rounded-t-md mt-10">
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
        <span>Wallet</span>
      </h2>
    </div>

    <!-- ✅ Card -->
    <div class="w-full max-w-5xl mx-auto mt-5 bg-black/50 p-6 rounded-md text-white">
      <!-- Card Header -->
      <div class="flex items-center gap-2 mb-6">
        <svg
          version="1.1"
          id="Layer_1"
          class="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 468.179 468.179"
          xml:space="preserve"
        >
          <g>
            <path
              d="M332.587,226.233C307.597,257.701,272.755,276,234.09,276c-39.772,0-74.273-19.264-98.496-49.767
              C83.66,259.029,49.09,316.93,49.09,382.763c0,19.942,10.92,47.734,62.942,66.889c32.45,11.948,75.798,18.527,122.058,18.527
              c46.26,0,89.607-6.579,122.058-18.527c52.023-19.154,62.942-46.946,62.942-66.889C419.09,316.93,384.52,259.029,332.587,226.233z"
              fill="#ffffff"
            />
            <path
              d="M234.09,246c58.304,0,103.2-56.357,103.2-123c0-66.672-44.919-123-103.2-123c-58.304,0-103.2,56.357-103.2,123
              C130.89,189.672,175.81,246,234.09,246z"
              fill="#ffffff"
            />
          </g>
        </svg>
        <h2 class="text-lg font-semibold">Personal Info</h2>
      </div>

      <!-- Form when no data -->
      <form
        v-if="!userDoc?.maritalStatus"
        @submit.prevent="handleSubmitInfo"
        class="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div>
          <label class="block text-sm mb-1">Marital Status</label>
          <input
            v-model="formData.maritalStatus"
            type="text"
            placeholder="Marital Status"
            class="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400 p-2"
            required
          />
        </div>

        <div>
          <label class="block text-sm mb-1">Current Address</label>
          <input
            v-model="formData.address"
            type="text"
            placeholder="Current Address"
            class="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400 p-2"
            required
          />
        </div>

        <div>
          <label class="block text-sm mb-1">Monthly Income</label>
          <input
            v-model="formData.income"
            type="text"
            placeholder="Monthly Income"
            class="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400 p-2"
            required
          />
        </div>

        <div>
          <label class="block text-sm mb-1">Loan Purpose</label>
          <input
            v-model="formData.loanPurpose"
            type="text"
            placeholder="Loan Purpose"
            class="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400 p-2"
            required
          />
        </div>

        <!-- Submit Button -->
        <div class="lg:col-span-2 pt-6">
          <button
            v-if="!isLoanding"
            type="submit"
            class="w-full py-3 font-semibold text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
          >
            Submit
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

      <!-- If Data Exists -->
      <div v-else class="space-y-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <p><strong>Marital Status:</strong> {{ userDoc.maritalStatus }}</p>
          <p><strong>Current Address:</strong> {{ userDoc.address }}</p>
          <p><strong>Monthly Income:</strong> {{ userDoc.income }}</p>
          <p><strong>Loan Purpose:</strong> {{ userDoc.loanPurpose }}</p>
        </div>

        <button
          @click="handleNext"
          class="w-full mt-6 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import NavbarComponent from "@/components/client/NavbarComponent.vue";
import MobileView from "./MobileView.vue";
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import useCollection from "@/firebase/useCollection";
import getUser from "@/firebase/getUser";
import getColectionQuryTerms from "@/firebase/getCollectionQueryTerm";
import { documentId, where } from "firebase/firestore";

export default {
  components: { NavbarComponent, MobileView },
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
        };

        await updateDocs(user?.value?.uid, updatedData);

        userDoc.value = updatedData; // update UI
        isLoanding.value = false;

        router.push({
          path: "/baneficicary",
          query: { data: JSON.stringify(props.data) },
        });
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
