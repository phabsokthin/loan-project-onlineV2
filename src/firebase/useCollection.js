import { projectFirestore } from "@/config/config";
import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { ref } from "vue";

const isPending = ref(false)


const useCollection = (collectionName) => {

    const collectionRef = collection(projectFirestore, collectionName)

    const addcDocs = async (formDoc) => {

        try {
            isPending.value = true
            return await addDoc(collectionRef, formDoc)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            isPending.value = false
        }
    }

    const setDocs = async (formDoc, id) => {
        const documentRef = doc(collectionRef, id)
        try {
            isPending.value = true
            await setDoc(documentRef, formDoc)
            isPending.value = false
            return true
        }
        catch (err) {
            console.log(err)
        }
    }

    const updateDocs = async(id, formDoc) => {
        const docRef = doc(collectionRef, id)
        try{
            await updateDoc(docRef, formDoc)
            return true;
        }
        catch(err){
            console.log(err)
        }
    }

    const deleteDocs = async(docID) => {

        try{
            await deleteDoc(doc(collectionRef, docID))
            return true;
        }
        catch(err){
            console.log(err)
        }

    }

    return { addcDocs, setDocs, isPending, deleteDocs,updateDocs }

}

export default useCollection;