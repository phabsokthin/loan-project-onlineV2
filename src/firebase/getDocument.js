
import { projectFirestore } from "@/config/config"
import { collection, doc, onSnapshot } from "firebase/firestore"
import { ref, watchEffect } from "vue"


const getDocument = (collectionName, id, subCollection) => {

    const isLoading = ref(true)
    const documents = ref(null)
    const documentRef = doc(projectFirestore,`${collectionName}/${id}/`)
    const subCollectionRef = collection(documentRef, subCollection);
    const unsubscripe = onSnapshot(subCollectionRef, (qry) => {
      
        const result = []
        qry.forEach((doc) => {
            result.push({id: doc.id, ...doc.data()})
        })
        documents.value = result
        isLoading.value = false
    },(err) => {
        console.log(err)
    })

    
    watchEffect((onInvaliDate) => {
        onInvaliDate(()=>unsubscripe())
    })

    return {documents, isLoading}
}


export default getDocument;
