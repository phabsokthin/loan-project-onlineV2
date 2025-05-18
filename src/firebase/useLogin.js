import { projectAuth } from "@/config/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";


const isPending = ref(false)

const signIn = async(email, password)=> {

    try{
        isPending.value = true
        await signInWithEmailAndPassword(projectAuth,email, password)
        isPending.value = false
        return true;
    }
    catch(err){
        console.log(err)
        isPending.value = false
    }

}

const useSignin = () => {
    return {signIn, isPending}
}


export default useSignin;