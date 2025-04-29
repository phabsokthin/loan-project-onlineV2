import { projectFirestore } from "@/config/config"
import { collection, onSnapshot, query } from "firebase/firestore"
import { ref, watchEffect } from "vue"


const getCollection = (collectionName) => {

    const document = ref(null)
    // const collectionRef = query(collection(projectFirestore, collectionName), orderBy("createdAt", "desc"))
    const collectionRef = query(collection(projectFirestore, collectionName))


    const unsubscript = onSnapshot(collectionRef, (qry) => {

        const result = []
        qry.forEach((doc) => {
            result.push({id: doc.id, ...doc.data()})
        })
        document.value = result
    })

    watchEffect((onValidate) => {
        onValidate(() => unsubscript())
    })

    return {document}
}



export default getCollection;