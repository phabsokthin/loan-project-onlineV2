<template>
    <div class="hidden lg:block">
        <NavbarComponent />
    </div>
    <div class="lg:hidden">
        <MobileView />
    </div>
    <div class="w-full max-w-4xl px-2 py-2 m-auto mt-1 bg-white" v-motion-fade>
        <h2 class="flex items-center justify-center gap-2 p-3 text-lg font-semibold text-center text-white bg-blue-600 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-id-card-icon lucide-id-card">
                <path d="M16 10h2" />
                <path d="M16 14h2" />
                <path d="M6.17 15a3 3 0 0 1 5.66 0" />
                <circle cx="9" cy="11" r="2" />
                <rect x="2" y="5" width="20" height="14" rx="2" />
            </svg>
            <span>Identify</span>
        </h2>
        <div class="max-w-md p-4 mx-auto overflow-hidden bg-white rounded-xl">
            <h1 class="mb-4 text-2xl font-bold text-center text-gray-800">KYC Identification</h1>

            <div v-for="usDoc in userDoc" :key="usDoc" class="mb-4">

                <form v-if="!usDoc.front_image || !usDoc.back_image || !usDoc.selfie_image"
                    @submit.prevent="handleSubmit" class="space-y-6">
                    <!-- Front ID Card Section -->
                    <div>
                        <label class="block mb-1 text-sm font-medium text-gray-700">Front ID Card</label>
                        <div
                            class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                <div class="flex justify-center">
                                    <template v-if="!frontImage">
                                        <svg class="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none"
                                            viewBox="0 0 48 48" aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </template>
                                    <img v-else :src="frontImage" class="object-contain h-48" alt="Front ID preview">
                                </div>
                                <div class="flex justify-center text-sm text-gray-600">
                                    <label for="front-upload"
                                        class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none">
                                        <span v-if="!frontImage">Upload a file</span>
                                        <span v-else>Change file</span>
                                        <input id="front-upload" name="front-upload" type="file" class="sr-only"
                                            @change="handleFrontUpload" accept="image/*">
                                    </label>
                                </div>
                                <p class="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                            </div>
                        </div>
                    </div>

                    <!-- Back ID Card Section -->
                    <div>
                        <label class="block mb-1 text-sm font-medium text-gray-700">Back ID Card</label>
                        <div
                            class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                <div class="flex justify-center">
                                    <template v-if="!backImage">
                                        <svg class="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none"
                                            viewBox="0 0 48 48" aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </template>
                                    <img v-else :src="backImage" class="object-contain h-48" alt="Back ID preview">
                                </div>
                                <div class="flex justify-center text-sm text-gray-600">
                                    <label for="back-upload"
                                        class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none">
                                        <span v-if="!backImage">Upload a file</span>
                                        <span v-else>Change file</span>
                                        <input id="back-upload" name="back-upload" type="file" class="sr-only"
                                            @change="handleBackUpload" accept="image/*">
                                    </label>
                                </div>
                                <p class="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                            </div>
                        </div>
                    </div>

                    <!-- Selfie Section -->
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-700">Selfie with Photo</label>
                        <div
                            class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                <div class="flex justify-center">
                                    <template v-if="!selfieImage">
                                        <svg class="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none"
                                            viewBox="0 0 48 48" aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </template>
                                    <img v-else :src="selfieImage" class="object-contain h-48" alt="Selfie preview">
                                </div>
                                <div class="flex justify-center text-sm text-gray-600">
                                    <button v-if="!isCameraOpen" type="button" @click="openCamera"
                                        class="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none">
                                        Take a photo
                                    </button>
                                    <button v-else type="button" @click="takePhoto"
                                        class="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none">
                                        Capture
                                    </button>
                                    <label v-if="!isCameraOpen"
                                        class="relative ml-3 font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none">
                                        <span v-if="!selfieImage">or upload</span>
                                        <span v-else>or change</span>
                                        <input type="file" class="sr-only" @change="handleSelfieUpload"
                                            accept="image/*">
                                    </label>
                                </div>
                                <p class="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                            </div>
                        </div>
                    </div>

                    <!-- Camera Modal -->
                    <div v-if="isCameraOpen"
                        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div class="w-full max-w-md p-4 bg-white rounded-lg">
                            <div class="relative">
                                <video ref="video" autoplay class="w-full h-auto rounded-lg"></video>
                                <canvas ref="canvas" class="hidden"></canvas>
                            </div>
                            <div class="flex justify-between mt-4">
                                <button type="button" @click="closeCamera"
                                    class="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600">
                                    Cancel
                                </button>
                                <button type="button" @click="takePhoto"
                                    class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                                    Take Photo
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div>
                        <button v-if="!isLoanding" type="submit" :disabled="!isFormComplete"
                            :class="{ 'opacity-50 cursor-not-allowed': !isFormComplete, 'hover:bg-indigo-700': isFormComplete }"
                            class="flex justify-center w-full px-4 py-2 mb-20 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Continue
                        </button>

                        <button v-else type="submit" disabled
                            :class="{ 'opacity-50 cursor-not-allowed': !isFormComplete, 'hover:bg-indigo-700': isFormComplete }"
                            class="flex justify-center w-full px-4 py-2 mb-20 text-sm font-medium text-white bg-indigo-400 border border-transparent rounded-md shadow-sm cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Waiting...
                        </button>
                    </div>
                </form>


                <div v-else class="space-y-6">
                    <!-- Front ID Card Section -->
                    <div>
                        <label class="block mb-1 text-sm font-medium text-gray-700">Front ID Card</label>
                        <div
                            class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                <div class="flex justify-center">
                                    <template v-if="!frontImage">
                                        <img :src="usDoc.front_image" alt="">
                                    </template>
                                    <img v-else :src="frontImage" class="object-contain h-48" alt="Front ID preview">
                                </div>


                            </div>
                        </div>
                    </div>

                    <!-- Back ID Card Section -->
                    <div>
                        <label class="block mb-1 text-sm font-medium text-gray-700">Back ID Card</label>
                        <div
                            class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                <div class="flex justify-center">
                                    <img :src="usDoc.back_image" alt="">
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- Selfie Section -->
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-700">Selfie with Photo</label>
                        <div
                            class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                <div class="flex justify-center">
                                    <img :src="usDoc.selfie_image" alt="">
                                </div>
                                <div class="flex justify-center text-sm text-gray-600">

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Camera Modal -->
                    <div v-if="isCameraOpen"
                        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div class="w-full max-w-md p-4 bg-white rounded-lg">
                            <div class="relative">
                                <video ref="video" autoplay class="w-full h-auto rounded-lg"></video>
                                <canvas ref="canvas" class="hidden"></canvas>
                            </div>
                            <div class="flex justify-between mt-4">
                                <button type="button" @click="closeCamera"
                                    class="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600">
                                    Cancel
                                </button>
                                <button type="button" @click="takePhoto"
                                    class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                                    Take Photo
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="">
                        <button @click="handleIndentNext"
                            class="flex justify-center w-full p-3 mb-40 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Next
                        </button>

                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { ref, computed, onBeforeUnmount } from 'vue';
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import MobileView from './MobileView.vue';
// import { useRoute } from 'vue-router'

import { useRouter } from 'vue-router';
import useStorage from '@/firebase/useStorage';

import useCollection from '@/firebase/useCollection';
import getUser from '@/firebase/getUser';
import { watch } from 'vue';

import getColectionQuryTerms from '@/firebase/getCollectionQueryTerm';
import { documentId, where } from 'firebase/firestore';

export default {
    components: {
        NavbarComponent,
        MobileView
    },
    name: 'KYCForm',

    props: {
        data: {
            type: Object,
            required: true
        }
    },

    setup(props) {
        const frontImage = ref(null);
        const backImage = ref(null);
        const selfieImage = ref(null);
        const isCameraOpen = ref(false);
        const stream = ref(null);
        const frontCard = ref(null);
        const backCard = ref(null);
        const selfieCard = ref(null);
        const isLoanding = ref(false);
        const userDoc = ref(null);

        console.log('KYCForm props:', props.data);

        const { updateDocs } = useCollection('customers');
        const { uploadImage } = useStorage();

        const { user } = getUser();


        const router = useRouter();


        //display User


        watch(
            () => user.value?.uid,
            async (newUid) => {
                if (newUid) {
                    const { documents } = await getColectionQuryTerms('customers', where(documentId(), '==', newUid));
                    console.log("documents", documents);
                    watch(() => {
                        userDoc.value = documents.value || null;
                    })



                }
            },
            { immediate: true }
        );

        const isFormComplete = computed(() => {
            return frontImage.value && backImage.value && selfieImage.value;
        });

        const handleFrontUpload = (event) => {
            const file = event.target.files[0];
            if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
                frontImage.value = URL.createObjectURL(file);
                frontCard.value = file;
            } else {
                alert('Please select an image file under 5MB');
            }
        };

        const handleBackUpload = (event) => {
            const file = event.target.files[0];
            if (file && file.size <= 5 * 1024 * 1024) {
                backImage.value = URL.createObjectURL(file);
                backCard.value = file;
            } else {
                alert('Please select an image file under 5MB');
            }
        };

        const handleSelfieUpload = (event) => {
            const file = event.target.files[0];
            if (file && file.size <= 5 * 1024 * 1024) {
                selfieImage.value = URL.createObjectURL(file);
                selfieCard.value = file;
            } else {
                alert('Please select an image file under 5MB');
            }
        };

        const openCamera = async () => {
            try {
                isCameraOpen.value = true;
                stream.value = await navigator.mediaDevices.getUserMedia({ video: true });
            } catch (error) {
                console.error('Error accessing camera:', error);
                alert('Could not access the camera. Please check permissions.');
                isCameraOpen.value = false;
            }
        };


        const closeCamera = () => {
            if (stream.value) {
                stream.value.getTracks().forEach(track => track.stop());
            }
            isCameraOpen.value = false;
        };

        const takePhoto = (videoRef, canvasRef) => {
            if (!isCameraOpen.value) return;

            const video = videoRef;
            const canvas = canvasRef;

            // Set canvas dimensions to match video stream
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Draw current video frame to canvas
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert canvas to data URL and set as selfie image
            selfieImage.value = canvas.toDataURL('image/jpeg');

            // Close camera
            closeCamera();
        };

        const handleSubmit = async () => {
            try {
                isLoanding.value = true;
                let front_image = '';
                let back_image = '';
                let selfie_image = '';

                if (isFormComplete.value) {
                    // Prepare image paths
                    const front_imagePath = `front_image/${frontCard.value.name}`;
                    const back_imagePath = `back_image/${backCard.value.name}`;
                    const selfie_imagePath = `selfie_image/${selfieCard.value.name}`;



                    // Upload images
                    front_image = await uploadImage(front_imagePath, frontCard.value);
                    back_image = await uploadImage(back_imagePath, backCard.value);
                    selfie_image = await uploadImage(selfie_imagePath, selfieCard.value);
                    console.log('Front Image URL:', front_image);
                    console.log('Back Image URL:', back_image);
                    console.log('Selfie Image URL:', selfie_image);
                    // Save image URLs to database
                    const image_data = {
                        front_image: front_image,
                        back_image: back_image,
                        selfie_image: selfie_image,
                        name: ''
                    };


                    await updateDocs(user?.value?.uid, image_data);
                    console.log('Image URL:', image_data);

                    // Navigate to another page
                    router.push({
                        path: "/personal",
                        query: {
                            data: JSON.stringify(props.data)
                        }
                    });

                    isLoanding.value = false;

                    // alert('KYC information submitted successfully!');

                }
            } catch (error) {
                console.log('Error submitting KYC information:', error);
            }
            finally {
                isLoanding.value = false;
            }
        };

        const handleIndentNext = () => {
            // Handle next button click

            router.push({
                path: "/personal",
                query: {
                    data: JSON.stringify(props.data)
                }
            });
        };


        // Clean up camera stream when component is destroyed
        onBeforeUnmount(() => {
            if (stream.value) {
                stream.value.getTracks().forEach(track => track.stop());
            }
        });

        return {
            frontImage,
            backImage,
            selfieImage,
            isCameraOpen,
            isFormComplete,
            handleFrontUpload,
            handleBackUpload,
            handleSelfieUpload,
            openCamera,
            closeCamera,
            takePhoto,
            handleSubmit,
            stream,
            isLoanding,
            userDoc,
            handleIndentNext
        };
    }
}
</script>