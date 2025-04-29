import { projectAuth } from "@/config/config";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";


const user = ref(null)

onAuthStateChanged(projectAuth, (_user) => {
    if(_user){
        user.value = _user
    }
    else{
        user.value = null
    }
})

const getUser = () => {
    return {user}
}

export default getUser;5