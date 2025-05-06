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


    const removeImagesArray = async (imageURLs = []) => {
        try {
          isLoading.value = true;
      
          const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/';
      
          const deletePromises = imageURLs
            .filter(Boolean) // filter out null or undefined images
            .map((url) => {
              const pathStart =
                url.indexOf(baseUrl) !== -1
                  ? url.split('/o/')[1].split('?')[0]
                  : url;
              const decodedPath = decodeURIComponent(pathStart);
              const itemRef = storageRef(projectStorage, decodedPath);
              return deleteObject(itemRef);
            });
      
          await Promise.all(deletePromises);
        } catch (err) {
          console.error('Error removing images:', err);
        } finally {
          isLoading.value = false;
        }
      };
      

    return { uploadImage, removeImage,isLoading, removeImagesArray };
};

export default useStorage;