import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const useDocument = (collection, id) => {
  const error = ref(null);
  const isPending = ref(false);

  const deleteDoc = async () => {
    error.value = null;
    isPending.value = true;

    let docRef = projectFirestore.collection(collection).doc(id);

    try {
      const res = await docRef.delete();
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = "Could not delete doc";
      isPending.value = false;
    }
  };

  return { error, deleteDoc, isPending };
};

export default useDocument;
