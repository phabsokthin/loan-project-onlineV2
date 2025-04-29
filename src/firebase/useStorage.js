import { ref as storageRef, getDownloadURL, deleteObject, uploadBytes } from 'firebase/storage';
import { projectStorage } from '@/config/config';
import { ref } from 'vue';


const useStorage = () => {

    const isLoading = ref(false)

    const uploadImage = async (storagePath, imageFile) => {
        const imageRef = storageRef(projectStorage, storagePath);
        try {

            await uploadBytes(imageRef, imageFile);
            const imageURL = await getDownloadURL(imageRef);

            return imageURL;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    };


    const removeImage = async (imageURL) => {

        const itemRef = storageRef(projectStorage, imageURL);
        try {
            isLoading.value = true
            await deleteObject(itemRef);
        } catch (err) {
            console.log(err)
        }
        finally {
            isLoading.value = false
        }
    }


    return { uploadImage, removeImage,isLoading };
};

export default useStorage;