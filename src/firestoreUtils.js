import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; 

const addEventToFirestore = async (eventData) => {
  const eventsCollection = collection(db, "events");
  await addDoc(eventsCollection, eventData);
};

export { addEventToFirestore };