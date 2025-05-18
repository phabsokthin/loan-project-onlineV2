import { projectAuth } from '@/config/config'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { ref } from 'vue';

const error = ref(null)
const isLoading = ref(false)
const signup = async (email, password, displayName) => {

    try {
        isLoading.value = true
        const response = await createUserWithEmailAndPassword(projectAuth, email, password);
        await updateProfile(response?.user, { displayName });
        await sendEmailVerification(response.user)
        isLoading.value = false
        return response
    }
    catch (err) {
        console.log(err)
        isLoading.value = false;
        // error.value = "Password must be has 6 character";
        error.value = err.message;
        switch (err.code) {
            case 'auth/email-already-in-use':
                error.value = 'Email already in use. Please try another email.';
                break;
            case 'auth/invalid-email':
                error.value = 'Invalid email. Please enter a valid email address.';
                break;
            case 'auth/operation-not-allowed':
                error.value = 'Operation not allowed. Please contact support.';
                break;
            case 'auth/weak-password':
                error.value = 'Password must be at least 6 characters.';
                break;
            default:
                error.value = err.message;
                break;
        }
    }
}

const useSignup = () => {
    return { isLoading, signup, error }
}

export default useSignup;