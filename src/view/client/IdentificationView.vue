<template>
  <div class="hidden lg:block">
    <NavbarComponent />
  </div>
  <div class="lg:hidden">
    <MobileView />
  </div>

  <div class=" px-4 py-4 m-auto min-h-screen back_image text-white">
    <!-- Header -->
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
        <span>Identify Picture </span>
      </h2>
    </div>
    <!-- Card -->
    <div class="w-full max-w-5xl mx-auto mt-5 bg-black/50 p-6 rounded-md text-white">
        <form v-if="!userDoc?.front_image" @submit.prevent="handleSubmit" class="space-y-6">
            <h2
            class="flex items-center gap-2  text-xl font-semibold text-white rounded-md ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path d="M16 10h2M16 14h2M6.17 15a3 3 0 0 1 5.66 0" />
                <circle cx="9" cy="11" r="2" />
                <rect x="2" y="5" width="20" height="14" rx="2" />
            </svg>
            <span>Identify Picture</span>
            </h2>

            <!-- Responsive Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Actual Name -->
            <div>
                <label class="block text-sm mb-1">Actual Name</label>
                <input v-model="formData.name" type="text" placeholder="Actual Name"
                class="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400 p-2" />
            </div>

            <!-- ID Number -->
            <div>
                <label class="block text-sm mb-1">ID Number</label>
                <input v-model="formData.idNumber" type="text" placeholder="ID Number"
                class="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400 p-2" />
            </div>
            </div>

            <!-- Uploads -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <label class="block mb-1">Front ID Card</label>
                <input type="file" @change="handleFrontUpload" accept="image/*"
                class="block w-full text-sm text-gray-300" />
                <img v-if="frontImage" :src="frontImage" class="mt-2 rounded-md max-h-48 mx-auto" />
            </div>

            <div>
                <label class="block mb-1">Back ID Card</label>
                <input type="file" @change="handleBackUpload" accept="image/*"
                class="block w-full text-sm text-gray-300" />
                <img v-if="backImage" :src="backImage" class="mt-2 rounded-md max-h-48 mx-auto" />
            </div>
            </div>

            <div>
            <label class="block mb-1">Selfie with ID Card</label>
            <input type="file" @change="handleSelfieUpload" accept="image/*"
                class="block w-full text-sm text-gray-300" />
            <img v-if="selfieImage" :src="selfieImage" class="mt-2 rounded-md max-h-48 mx-auto" />
            </div>

            <!-- Submit -->
            <div class="pt-4">
            <button v-if="!isLoanding" type="submit"
                class="w-full py-3 font-semibold text-black bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
                Submit
            </button>
            <button v-else disabled type="button"
                class="w-full py-3 font-semibold text-gray-200 bg-gray-600 rounded-full cursor-not-allowed">
                Please wait...
            </button>
            </div>
        </form>

        <!-- If Data Exists -->
        <div v-else class="space-y-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <p><strong>Name:</strong> {{ userDoc.name }}</p>
            <p><strong>ID Number:</strong> {{ userDoc.idNumber }}</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <img :src="userDoc.front_image" alt="Front ID" class="rounded-md max-h-48 mx-auto" />
            <img :src="userDoc.back_image" alt="Back ID" class="rounded-md max-h-48 mx-auto" />
            <img :src="userDoc.selfie_image" alt="Selfie" class="rounded-md max-h-48 mx-auto" />
            </div>

            <button @click="handleNext"
            class="w-full py-3 font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
            Next
            </button>
        </div>
    </div>

  </div>
</template>

<script>
import { ref, watch } from "vue";
import NavbarComponent from "@/components/client/NavbarComponent.vue";
import MobileView from "./MobileView.vue";
import { useRouter } from "vue-router";
import useStorage from "@/firebase/useStorage";
import useCollection from "@/firebase/useCollection";
import getUser from "@/firebase/getUser";
import getColectionQuryTerms from "@/firebase/getCollectionQueryTerm";
import { documentId, where } from "firebase/firestore";

export default {
  components: { NavbarComponent, MobileView },
  name: "KYCForm",
  props: { data: { type: Object, required: true } },

  setup(props) {
    const formData = ref({ name: "", idNumber: "" });
    const frontImage = ref(null);
    const backImage = ref(null);
    const selfieImage = ref(null);
    const frontCard = ref(null);
    const backCard = ref(null);
    const selfieCard = ref(null);
    const isLoanding = ref(false);
    const userDoc = ref(null);

    const { updateDocs } = useCollection("customers");
    const { uploadImage } = useStorage();
    const { user } = getUser();
    const router = useRouter();

    // fetch Firestore data
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

    // uploads
    const handleFrontUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        frontImage.value = URL.createObjectURL(file);
        frontCard.value = file;
      }
    };
    const handleBackUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        backImage.value = URL.createObjectURL(file);
        backCard.value = file;
      }
    };
    const handleSelfieUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        selfieImage.value = URL.createObjectURL(file);
        selfieCard.value = file;
      }
    };

    // submit
    const handleSubmit = async () => {
      try {
        isLoanding.value = true;
        const frontUrl = await uploadImage(`front/${frontCard.value.name}`, frontCard.value);
        const backUrl = await uploadImage(`back/${backCard.value.name}`, backCard.value);
        const selfieUrl = await uploadImage(`selfie/${selfieCard.value.name}`, selfieCard.value);

        const saveData = {
          name: formData.value.name,
          idNumber: formData.value.idNumber,
          front_image: frontUrl,
          back_image: backUrl,
          selfie_image: selfieUrl,
        };

        await updateDocs(user?.value?.uid, saveData);
        userDoc.value = saveData;

        router.push({ path: "/personal", query: { data: JSON.stringify(props.data) } });
      } catch (err) {
        console.error(err);
      } finally {
        isLoanding.value = false;
      }
    };

    const handleNext = () => {
      router.push({ path: "/personal", query: { data: JSON.stringify(props.data) } });
    };

    return {
      formData,
      frontImage,
      backImage,
      selfieImage,
      handleFrontUpload,
      handleBackUpload,
      handleSelfieUpload,
      handleSubmit,
      isLoanding,
      userDoc,
      handleNext,
    };
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
