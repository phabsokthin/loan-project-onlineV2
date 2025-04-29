import { projectAuth } from "@/config/config"


const signOut = async() => {

    try{
        await projectAuth.signOut();
        return true;
    }
    catch(err){
        console.log(err)
    }
}

const useSignout = () => {
    return {signOut}
}


export default useSignout;
