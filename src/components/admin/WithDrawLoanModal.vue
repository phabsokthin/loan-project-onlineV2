<template>
  <!-- Withdraw Modal -->
  <div class="fixed inset-0 z-50 flex items-end lg:items-center bg-black/60">
    <div
      class="w-full lg:max-w-lg lg:mx-auto bg-[#111] rounded-t-2xl lg:rounded-lg p-5 shadow-lg"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg font-bold text-white">Withdraw</h2>
        <button @click="handleClose" class="text-white text-2xl leading-none">
          &times;
        </button>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleWithDrawCode" class="space-y-4">
        <!-- Amount -->
        <div>
          <input
            required
            type="number"
            placeholder="Amount"
            v-model="amount"
            readonly
            class="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-300 focus:outline-none"
          />
        </div>

        <!-- Withdraw Code -->
        <div>
          <input
            required
            type="text"
            placeholder="Withdraw Code"
            v-model="wcode"
            class="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-300 focus:outline-none"
          />
        </div>

        <!-- Actions -->
        <div class="flex justify-between items-center mt-6">
          <button
            type="button"
            @click="handleClose"
            class="text-white underline"
          >
            CANCEL
          </button>
          <button
            type="submit"
            :disabled="isLoanding"
            class="px-6 py-2 font-bold text-black rounded-md bg-[#5A7135] hover:bg-[#4A5E2A] disabled:bg-gray-500 disabled:text-gray-300"
          >
            {{ isLoanding ? "PROCESSING..." : "CONFIRM" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useCollection from "@/firebase/useCollection";
import { watch, onMounted, ref } from "vue";
import getUser from "@/firebase/getUser";
import getCollectionQueryTerm from "@/firebase/getCollectionQueryTerm";
import { documentId, where } from "firebase/firestore";
import { useRouter } from "vue-router";
import { timestamp } from "@/config/config";

export default {
  props: ["currentData"],
  setup(props, { emit }) {
    const { user } = getUser();

    const amount = ref("");
    const codeWithDraw = ref("");
    const router = useRouter();
    const isLoanding = ref(false);
    const { updateDocs } = useCollection("customers");
    const { setDocs } = useCollection("withdrawLoan");
    const { addcDocs } = useCollection("withdrawLoanHistory");

    const wcode = ref("");

    onMounted(() => {
      if (props?.currentData) {
        amount.value = props?.currentData?.withDrawAmount;
      }
    });

    const handleClose = () => {
      emit("close");
    };

    watch(
      () => user.value?.uid,
      async (newUid) => {
        if (newUid) {
          const { documents } = await getCollectionQueryTerm(
            "customers",
            where(documentId(), "==", newUid)
          );
          watch(() => {
            codeWithDraw.value = documents.value || null;
          });
        }
      },
      { immediate: true }
    );

    const handleWithDrawCode = async () => {
      try {
        const data = {
          withDrawAmount: amount.value,
          codeWithdraw: wcode.value,
          amount: props.currentData.amount,
          status: "0",
          totalPrincipalAndInterest:
            props.currentData.totalPrincipalAndInterest,
          monthlyPayment: props.currentData.monthlyPayment,
          totalInterest: props.currentData.totalInterest,
          interestRate: props.currentData.interestRate,
          term: props.currentData.term,
          ipAddress: props.currentData.ipAddress,
          bankName: props.currentData.bankName,
          accountNumber: props.currentData.accountNumber,
          name: props.currentData.name,
          contact: props.currentData.contact,
          dob: props.currentData.dob,
          gender: props.currentData.gender,
          idNumber: props.currentData.idNumber,
          job: props.currentData.job,
          loanPurpose: props.currentData.loanPurpose,
          relativeName: props.currentData.relativeName,
          relativePhone: props.currentData.relativePhone,
          selfie_image: props.currentData.selfie_image,
          front_image: props.currentData.front_image,
          back_image: props.currentData.back_image,
          assigned_image: props.currentData.assigned_image,
          createdAt: timestamp(),
        };

        const dataHistory = {
          ...data,
          userId: user.value?.uid,
        };

        const loanAmountData = {
          withDrawAmount: 0,
          codeWithdraw: "",
        };

        if (props.currentData.codeWithdraw === wcode.value) {
          isLoanding.value = true;

          setTimeout(async () => {
            isLoanding.value = false;
            await setDocs(data, props.currentData.id);
            await updateDocs(props.currentData.id, loanAmountData);
            await addcDocs(dataHistory);
            router.push("/withDrawSuccess");
          }, 2000);
        } else {
          alert("Your code is not correct!");
        }
      } catch (err) {
        console.log(err);
      }
    };

    return {
      handleClose,
      amount,
      handleWithDrawCode,
      codeWithDraw,
      wcode,
      isLoanding,
    };
  },
};
</script>
