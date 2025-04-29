import { collection, addDoc } from 'firebase/firestore';
import { projectFirestore, timestamp } from '../config/config';

// Function to create a user profile in Firestore
async function createUserProfile(userData) {
    try {
        const docRef = await addDoc(collection(projectFirestore, "users"), {
            phone: userData.phone,
            createdAt: timestamp()
        });
        return { id: docRef.id };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { error: error.message };
    }
}

export { createUserProfile };