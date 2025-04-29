import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Helper to convert phone number to a pseudo-email (since Firebase needs email)
function phoneToEmail(phone) {
    return `${phone}@gmail.com`;
}

export async function registerWithPhone(phone, password) {
    const auth = getAuth();
    const email = phoneToEmail(phone);
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Removed createUserProfile call
        return { user: userCredential.user };
    } catch (error) {
        return { error: error.message };
    }
}

export async function loginWithPhone(phone, password) {
    const auth = getAuth();
    const email = phoneToEmail(phone);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { user: userCredential.user };
    } catch (error) {
        return { error: error.message };
    }
}

