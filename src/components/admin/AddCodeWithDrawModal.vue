<template>


    <!-- component -->
    <div class="flex items-center justify-center font-sans bg-gray-100">
        <div x-data="{ showPrivacyPolicy: true }">
            <!-- Button to open the privacy policy modal -->
            <!-- Privacy Policy Modal -->
            <form @submit.prevent="handleUpdatecodeWithdraw" x-show="showPrivacyPolicy" class="fixed inset-0 z-10 flex items-center justify-center">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                <div class="relative w-full max-w-screen-md m-4 overflow-hidden bg-white rounded-lg shadow-xl"
                    x-transition:enter="transition ease-out duration-300 transform opacity-0 scale-95"
                    x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
                    x-transition:leave="transition ease-in duration-200 transform opacity-100 scale-100"
                    x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
                    x-cloak>
                    <!-- Modal panel -->
                    <div class="px-6 py-4">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Code WithDraw </h3>
                    </div>
                    <div class="max-w-screen-md p-6 overflow-y-auto prose"
                        style="max-height: 70vh; background-color: #fff; border: 1px solid #e2e8f0; border-radius: 0.375rem; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);">

                      <label for="">Code withdraw: *</label>
                      <input required type="text" class="w-full p-2 border rounded-md" v-model="codeWithdraw" placeholder="Code withdraw">
                    </div>
                    <div class="flex flex-row justify-end gap-4 p-4 px-4 py-3 bg-gray-50 sm:px-6 align-items">
                        <button type="button" @click="handleClose"
                            class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm">
                            Close</button>

                        <button type="submit" @click="handleUpdateStatus"
                            class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm">
                            Submit </button>
                    </div>


                </div>
            </form>
        </div>

    </div>


</template>

<script>
import useCollection from '@/firebase/useCollection'
import { onMounted } from 'vue'
import { ref } from 'vue'


export default {
    props: ['statusData', 'creditData'],
    setup(props, { emit }) {

        const codeWithdraw = ref("")

        const {updateDocs} = useCollection("customers")
        
        const handleClose = () => {
            emit('close')
        }

        
        onMounted(() => {
            if (props?.creditData) {
                codeWithdraw.value = props?.creditData?.codeWithdraw
            }

        })

    

        const handleUpdatecodeWithdraw = async() => {
            try{
                const data = {
                    codeWithdraw: codeWithdraw.value
                }
                await updateDocs(props?.creditData?.id, data)
                alert("You created code withdraw success!")
                handleClose();
            }
            catch(err){
                console.log(err)
            }
        }


        return { handleClose, handleUpdatecodeWithdraw, codeWithdraw}
    }
}

</script>