<template>


    <!-- component -->
    <div class="flex items-center justify-center font-sans bg-gray-100">
        <div x-data="{ showPrivacyPolicy: true }">
            <!-- Button to open the privacy policy modal -->
            <!-- Privacy Policy Modal -->
            <form @submit.prevent="handleSubmit" class="fixed inset-0 z-10 flex items-center justify-center">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                <div class="relative w-full max-w-screen-md m-4 overflow-hidden bg-white rounded-lg shadow-xl">
                    <!-- Modal panel -->
                    <div class="px-6 py-4">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Add New Slides </h3>
                    </div>
                    <div class="max-w-screen-md p-6 overflow-y-auto prose"
                        style="max-height: 70vh; background-color: #fff; border: 1px solid #e2e8f0; border-radius: 0.375rem; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);">

                        <input @change="handleSelectSlides" type="file" class="w-full p-2 border rounded-md"
                            placeholder="Status" required />

                        <img v-if="preViewSlide" :src="preViewSlide" alt="" class="w-full mt-2">
                        <div v-else class="flex justify-center mt-3 border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
                                alt="">
                        </div>
                    </div>
                    <div class="flex flex-row justify-end gap-4 p-4 px-4 py-3 bg-gray-50 sm:px-6 align-items">
                        <button type="button" @click="handleClose"
                            class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm">
                            Close</button>


                        <button v-if="!isLoanding" type="submit"
                            class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm">
                            Accept </button>

                        <button type="button" v-else disabled
                            class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm sm:w-auto sm:text-sm">
                            Loading... </button>
                    </div>


                </div>
            </form>
        </div>

    </div>


</template>

<script>
import { ref } from 'vue'
import useStorage from '@/firebase/useStorage'
import useCollection from '@/firebase/useCollection'
import { timestamp } from '@/config/config'

export default {
    props: ['statusData'],
    setup(props, { emit }) {

        const status = ref("")
        const preViewSlide = ref("")
        const selectFile = ref("")
        const isLoanding = ref(false)

        const { uploadImage } = useStorage()

        const { addcDocs } = useCollection("slides")




        const handleSelectSlides = (e) => {
            try {
                const file = e.target.files[0];

                if (!file) return;

                const maxSize = 5 * 1024 * 1024; // 5MB in bytes

                if (file.size > maxSize) {
                    alert("Image size cannot exceed 5MB.");
                    return;
                }

                preViewSlide.value = URL.createObjectURL(file);
                selectFile.value = file;
            } catch (err) {
                console.log(err);
            }
        }


        const handleClose = () => {
            emit('close')
        }

        const handleSubmit = async () => {
            isLoanding.value = true

            try {

                let imageSlideUrl = "";

                const slidePath = `slidesImage/${selectFile.value.name}`;

                imageSlideUrl = await uploadImage(slidePath, selectFile.value);
                const data = {
                    status: 1,
                    image: imageSlideUrl,
                    createdAt: timestamp(),
                }

                await addcDocs(data)
                alert("You created slide successfull!")
                isLoanding.value = false
                handleClose();
            }
            catch (err) {
                console.log(err)
            }

            finally {
                isLoanding.value = false
            }

        }




        return { handleClose, status, preViewSlide, handleSelectSlides, handleSubmit, isLoanding }
    }
}

</script>