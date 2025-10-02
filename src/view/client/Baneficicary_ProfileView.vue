<template>
  <div class="min-h-screen px-4 py-4 m-auto  back_image">
  <div class="hidden lg:block">
    <NavbarComponent />
  </div>
  <div class="lg:hidden">
    <MobileView />
  </div>

    <div class="w-full max-w-5xl mx-auto mt-10">
      <!-- Header -->
      <h2 class="flex items-center gap-2 p-3 mt-10 text-lg font-semibold text-white bg-black rounded-t-md">
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
        <span>Banks Details</span>
      </h2>
    </div>
    <!-- Card -->
    <div class="w-full max-w-5xl p-6 mx-auto mt-5 text-white shadow-lg bg-black/50 rounded-xl" >   
      <!-- Show Form if no bank data -->
      <form v-if="!userDoc?.bankName || !userDoc?.accountNumber"
        @submit.prevent="handleSubmitBank" class="space-y-6">
        <h2 class="flex items-center gap-2 text-xl font-semibold text-white rounded-md ">
           <svg id="Layer_1" enable-background="new 0 0 388 453" height="300" class="w-6 h-6 text-white" viewBox="0 0 388 453" width="300" xmlns="http://www.w3.org/2000/svg" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs">
                <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><g id="Layer_x0020_1" clip-rule="evenodd" fill-rule="evenodd"><path d="m19.168 404.636h349.363c10.214 0 18.625 9.312 18.625 20.427v23.731c0 2.403-1.502 4.206-3.605 4.206h-379.703c-1.802 0-3.605-1.802-3.605-4.206v-23.731c0-11.115 8.412-20.427 18.925-20.427z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m220.735 187.448v165.82h-52.269v-165.82z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m339.393 187.448v88.617c-.601 0-1.202 0-1.802 0-20.427 0-38.751 9.613-50.467 24.633v-113.25z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m103.28 187.448v165.82h-52.269v-165.82z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m378.444 136.08h-183.843-183.844c-1.502 0-2.704-.601-3.304-1.802-.3-1.202 0-2.403 1.202-3.304l89.218-63.684 93.123-66.088c2.103-1.502 5.107-1.502 7.21 0l93.123 66.088 89.218 63.684c1.202.901 1.802 2.103 1.202 3.304-.601 1.201-1.803 1.802-3.305 1.802zm-183.843-103.637c22.53 0 40.554 18.324 40.554 40.554 0 22.53-18.024 40.554-40.554 40.554-22.229 0-40.554-18.024-40.554-40.554 0-22.23 18.324-40.554 40.554-40.554z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><circle cx="194.601" cy="72.997" r="26.435" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m38.394 150.199h77.803v17.123c0 3.304-3.004 6.308-6.308 6.308h-65.487c-3.304 0-6.008-3.004-6.008-6.308z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m155.849 150.199h77.803v17.123c0 3.304-3.004 6.308-6.308 6.308h-65.487c-3.304 0-6.008-3.004-6.008-6.308z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m274.206 150.199h77.803v17.123c0 3.304-2.704 6.308-6.308 6.308h-65.186c-3.304 0-6.308-3.004-6.308-6.308v-17.123z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m38.394 390.517h77.803v-16.822c0-3.605-3.004-6.308-6.308-6.308h-65.487c-3.304 0-6.008 2.704-6.008 6.308z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m155.849 390.517h77.803v-16.822c0-3.605-3.004-6.308-6.308-6.308h-65.487c-3.304 0-6.008 2.704-6.008 6.308z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m274.206 390.517h23.131c-7.81-6.008-14.119-13.818-18.324-22.83-2.704.601-4.806 3.004-4.806 6.008v16.822z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m337.59 290.184c27.637 0 50.166 22.53 50.166 50.166 0 27.937-22.53 50.467-50.166 50.467s-50.166-22.53-50.166-50.467c0-27.636 22.53-50.166 50.166-50.166zm0 37.55c-4.206 0-7.51-3.304-7.51-7.51s3.304-7.51 7.51-7.51 7.51 3.304 7.51 7.51-3.304 7.51-7.51 7.51c4.206 0 7.51 3.304 7.51 7.51v25.534c0 3.905-3.304 7.51-7.51 7.51s-7.51-3.605-7.51-7.51v-25.534c0-4.206 3.305-7.51 7.51-7.51z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/> </g></g>
            </svg>
            <span>Banks Details</span>
        </h2>

        <div>
          <label class="block mb-1 text-sm">Bank Name</label>
          <input v-model="bankName" type="text" placeholder="Bank Name"
            class="w-full p-2 text-white bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400" />
        </div>

        <div>
          <label class="block mb-1 text-sm">Account Number</label>
          <input v-model="accountNumber" type="text" placeholder="Account Number"
            class="w-full p-2 text-white bg-transparent border-b border-gray-300 focus:outline-none focus:border-yellow-400" />
        </div>

        <!-- Submit -->
        <div class="pt-4">
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

      <!-- Show Data if already exists -->
      <div v-else class="space-y-4">
        <p><strong>Bank Name:</strong> {{ userDoc.bankName }}</p>
        <p><strong>Account Number:</strong> {{ userDoc.accountNumber }}</p>

        <button @click="handleNext"
          class="w-full py-3 font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
          Next
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import MobileView from './MobileView.vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import getUser from '@/firebase/getUser';
import useCollection from '@/firebase/useCollection';
import getColectionQuryTerms from '@/firebase/getCollectionQueryTerm';
import { documentId, where } from 'firebase/firestore';

export default {
  components: { NavbarComponent, MobileView },
  name: 'BankDetailsView',
  props: { data: { type: Object, required: true } },

  setup(props) {
    const bankName = ref('');
    const accountNumber = ref('');
    const userDoc = ref(null);
    const isLoanding = ref(false);

    const { user } = getUser();
    const { updateDocs } = useCollection('customers');
    const router = useRouter();

    // load data
    watch(
      () => user.value?.uid,
      async (newUid) => {
        if (newUid) {
          const { documents } = await getColectionQuryTerms(
            'customers',
            where(documentId(), '==', newUid)
          );
          watch(() => {
            userDoc.value = documents.value?.[0] || null;
          });
        }
      },
      { immediate: true }
    );

    // submit bank details
    const handleSubmitBank = async () => {
      try {
        isLoanding.value = true;
        const updatedData = {
          bankName: bankName.value,
          accountNumber: accountNumber.value,
        };
        await updateDocs(user?.value?.uid, updatedData);
        userDoc.value = updatedData; // update UI instantly
        router.push({
          path: '/loancontect',
          query: { data: JSON.stringify(props.data) },
        });
      } catch (err) {
        console.error(err);
      } finally {
        isLoanding.value = false;
      }
    };

    const handleNext = () => {
      router.push({
        path: '/loancontect',
        query: { data: JSON.stringify(props.data) },
      });
    };

    return {
      bankName,
      accountNumber,
      userDoc,
      isLoanding,
      handleSubmitBank,
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