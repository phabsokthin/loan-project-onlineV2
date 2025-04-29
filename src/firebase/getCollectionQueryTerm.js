import { projectFirestore } from "@/config/config";
import { collection, onSnapshot, query } from "firebase/firestore";
import { ref, watchEffect } from "vue";

const getCollectionQueryTerm = (collectionName, queryTerm) => {
  const isLoading = ref(true);
  const documents = ref([]);
  let collectionRef;
  if (queryTerm) {
    collectionRef = query(
      collection(projectFirestore, collectionName),
      queryTerm
    );
  } else {
    collectionRef = query(collection(projectFirestore, collectionName));
  }

  const unsubscripe = onSnapshot(collectionRef, (qry) => {
    const result = [];
    qry.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
    documents.value = result;
    isLoading.value = false;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscripe());
  });

  return { documents, isLoading };
};

export default getCollectionQueryTerm;