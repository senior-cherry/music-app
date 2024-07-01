import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const useDocument = (collection, id) => {
  const error = ref(null);
  const isPending = ref(false);

  let docRef = projectFirestore.collection(collection).doc(id);

  const deleteDoc = async () => {
    error.value = null;
    isPending.value = true;

    try {
      const res = await docRef.delete();
      isPending.value = false;
      return res;
    } catch (err) {
      error.value = "Could not delete doc";
      isPending.value = false;
    }
  };

  const updateDoc = async (updates) => {
    error.value = null;
    isPending.value = true;

    try {
      const res = await docRef.update(updates);
      isPending.value = false;
      return res;
    } catch (err) {
      error.value = "Could not update doc";
      isPending.value = false;
    }
  };

  return { error, deleteDoc, isPending, updateDoc };
};

export default useDocument;
