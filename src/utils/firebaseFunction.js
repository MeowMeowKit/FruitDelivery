import {
   collection,
   doc,
   getDocs,
   query,
   setDoc,
   orderBy,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// SAve new Item
const createItem = async (item) => {
   await setDoc(doc(firestore, "foodItems", `${Date.now()}`), item, {
      merge: true,
   });
};

const getAllItemsFood = async () => {
   const items = await getDocs(
      query(collection(firestore, "foodItems"), orderBy("id", "desc"))
   );

   return items.docs.map((doc) => doc.data());
};

export { createItem, getAllItemsFood };
