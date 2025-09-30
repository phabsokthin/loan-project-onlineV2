<template>
  <div class="min-h-screen back_image">
    <!-- Navbar -->
    <div class="hidden lg:block">
      <NavbarComponent />
    </div>
    <div class="lg:hidden">
      <MobileView />
    </div>

    <!-- Container -->
    <div class="w-full max-w-5xl mx-auto mt-10 px-4">
      <!-- Header -->
      <h2 class="flex items-center gap-2 p-3 text-lg font-semibold text-white bg-black rounded-t-md" >
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
        <span>Signature </span>
      </h2>

      <!-- Card -->
      <div class="w-full bg-black/50 rounded-xl shadow-lg p-6 text-white mt-5" >
        <!-- Form -->
        <form
          v-if="!userDoc?.assigned_image"
          @submit.prevent="agreeSignature"
          class="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <!-- Left side -->
          <div class="space-y-6">
            <h2 class="flex items-center  text-white space-x-3" >
              <svg version="1.1" id="Capa_1" class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25.588 25.588" style="enable-background:new 0 0 25.588 25.588;" xml:space="preserve" width="300" height="300" xmlns:svgjs="http://svgjs.dev/svgjs"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><g>
                  <path style="" d="M18.724,9.903l3.855,1.416l-3.206,8.729c-0.3,0.821-1.927,3.39-3.06,3.914l-0.275,0.75&#10;&#9;&#9;c-0.07,0.19-0.25,0.309-0.441,0.309c-0.054,0-0.108-0.01-0.162-0.029c-0.243-0.09-0.369-0.359-0.279-0.604l0.26-0.709&#10;&#9;&#9;c-0.575-1.117-0.146-4.361,0.106-5.047L18.724,9.903z M24.303,0.667c-1.06-0.388-2.301,0.414-2.656,1.383l-2.322,6.326l3.854,1.414&#10;&#9;&#9;l2.319-6.325C25.79,2.673,25.365,1.056,24.303,0.667z M17.328,9.576c0.108,0.04,0.219,0.059,0.327,0.059&#10;&#9;&#9;c0.382,0,0.741-0.234,0.882-0.614l2.45-6.608c0.181-0.487-0.068-1.028-0.555-1.208c-0.491-0.178-1.028,0.068-1.209,0.555&#10;&#9;&#9;l-2.45,6.608C16.592,8.855,16.841,9.396,17.328,9.576z M13.384,21.967c-0.253-0.239-0.568-0.537-1.078-0.764&#10;&#9;&#9;c-0.42-0.187-0.829-0.196-1.128-0.203c-0.031,0-0.067-0.001-0.103-0.002c-0.187-0.512-0.566-0.834-1.135-0.96&#10;&#9;&#9;c-0.753-0.159-1.354,0.196-1.771,0.47c0.037-0.21,0.098-0.46,0.143-0.64c0.144-0.58,0.292-1.18,0.182-1.742&#10;&#9;&#9;c-0.087-0.444-0.462-0.774-0.914-0.806c-1.165-0.065-2.117,0.562-2.956,1.129c-0.881,0.595-1.446,0.95-2.008,0.749&#10;&#9;&#9;c-0.686-0.244-0.755-2.101-0.425-3.755c0.295-1.49,0.844-4.264,2.251-5.524c0.474-0.424,1.16-0.883,1.724-0.66&#10;&#9;&#9;c0.663,0.26,1.211,1.352,1.333,2.653c0.051,0.549,0.53,0.952,1.089,0.902c0.55-0.051,0.954-0.539,0.902-1.089&#10;&#9;&#9;c-0.198-2.12-1.192-3.778-2.593-4.329C6.058,7.07,4.724,6.982,3.107,8.429c-1.759,1.575-2.409,4.246-2.88,6.625&#10;&#9;&#9;c-0.236,1.188-0.811,5.13,1.717,6.029c1.54,0.549,2.791-0.298,3.796-0.976c0.184-0.124,0.365-0.246,0.541-0.355&#10;&#9;&#9;c-0.167,0.725-0.271,1.501,0.167,2.155c0.653,0.982,1.576,1.089,2.742,0.321c0.045-0.029,0.097-0.063,0.146-0.097&#10;&#9;&#9;c0.108,0.226,0.299,0.475,0.646,0.645c0.42,0.206,0.84,0.216,1.146,0.224c0.131,0.003,0.31,0.007,0.364,0.031&#10;&#9;&#9;c0.188,0.083,0.299,0.185,0.515,0.389c0.162,0.153,0.333,0.312,0.55,0.476c0.18,0.135,0.39,0.199,0.598,0.199&#10;&#9;&#9;c0.304,0,0.605-0.139,0.801-0.4c0.331-0.442,0.241-1.069-0.201-1.4C13.61,22.183,13.495,22.072,13.384,21.967z" fill="#ffffff" fill-opacity="1" data-original-color="#030104ff" stroke="none" stroke-opacity="1"/>
                  </g><g>
                  </g></g>
                </svg>
              <label class="block text-sm ">Signature Name </label>
            </h2>
            <div>
              <input
                v-model="bankName"
                type="text"
                placeholder="Signature"
                class="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400 p-2 text-white"
              />
            </div>

            <div>
              <canvas
                ref="signaturePad"
                class="w-full h-40 bg-white border border-gray-300 rounded-md"
              ></canvas>
            </div>

            <!-- Buttons -->
            <div class="flex gap-2">
              <button
                type="button"
                @click="clearSignature"
                class="flex-1 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Reset
              </button>
              <button
                v-if="!isLoanding"
                type="submit"
                class="flex-1 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600"
              >
                Submit
              </button>
              <button
                v-else
                disabled
                class="flex-1 py-2 bg-gray-600 text-gray-200 rounded-md cursor-not-allowed"
              >
                Please wait...
              </button>
            </div>
          </div>
        </form>

        <!-- If Data Exists -->
        <div v-else class="space-y-4">
          <p class="font-semibold">Your Signature</p>
          <img
            :src="userDoc.assigned_image"
            alt="Signature"
            class="w-full h-40 bg-white rounded-md object-contain"
          />

          <button
            @click="handleComplete"
            class="w-full mt-4 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";
import NavbarComponent from "@/components/client/NavbarComponent.vue";
import MobileView from "./MobileView.vue";
import { ref, onMounted, watch } from "vue";
import useCollection from "@/firebase/useCollection";
import useStorage from "@/firebase/useStorage";
import getUser from "@/firebase/getUser";
import getColectionQuryTerms from "@/firebase/getCollectionQueryTerm";
import { documentId, where } from "firebase/firestore";
import { useRouter } from "vue-router";

export default {
  components: { NavbarComponent, MobileView },
  name: "SignatureView",
  props: { data: { type: Object, required: true } },

  setup(props) {
    const signaturePad = ref(null);
    const signaturePadInstance = ref(null);
    const userDoc = ref(null);
    const isLoanding = ref(false);
    const previewSignature = ref(null);
    const bankName = ref("");

    const { user } = getUser();
    const { updateDocs } = useCollection("customers");
    const { uploadImage } = useStorage();
    const router = useRouter();

    // Init signature pad
    onMounted(() => {
      const canvas = signaturePad.value;
      signaturePadInstance.value = new SignaturePad(canvas);

      // Live preview update
      signaturePadInstance.value.onEnd = () => {
        previewSignature.value = signaturePadInstance.value.toDataURL();
      };
    });

    // Watch Firestore user
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

    // Clear signature
    const clearSignature = () => {
      signaturePadInstance.value.clear();
      previewSignature.value = null;
    };

    // Save signature to Firebase
    const agreeSignature = async () => {
      if (signaturePadInstance.value.isEmpty()) {
        alert("Please sign before submitting.");
        return;
      }
      try {
        isLoanding.value = true;
        const signatureData = signaturePadInstance.value.toDataURL("image/png");
        const blob = await (await fetch(signatureData)).blob();
        const fileName = `signature_${Date.now()}.png`;
        const path = `signatures/${fileName}`;

        // Upload to Firebase
        const signatureUrl = await uploadImage(path, blob);

        // Save to Firestore
        await updateDocs(user?.value?.uid, {
          assigned_image: signatureUrl,
          signature_name: bankName.value,
        });

        userDoc.value = { assigned_image: signatureUrl };
      } catch (err) {
        console.error("Error saving signature:", err);
      } finally {
        isLoanding.value = false;
      }
    };

    const handleComplete = () => {
      router.push({
        path: "/complete",
        query: { data: JSON.stringify(props.data) },
      });
    };

    return {
      signaturePad,
      userDoc,
      isLoanding,
      clearSignature,
      agreeSignature,
      handleComplete,
      previewSignature,
      bankName,
    };
  },
};
</script>

<style scoped>
canvas {
  touch-action: none;
}
.back_image {
  background-image: url("/src/assets/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
</style>
