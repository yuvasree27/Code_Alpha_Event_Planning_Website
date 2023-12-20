import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";  



const firebaseConfig = {
  apiKey: "AIzaSyDW22JyWKcC3w2l7f-tzue_Oe2R-5Dqiwk",
  authDomain: "event-5ade0.firebaseapp.com",
  projectId: "event-5ade0",
  storageBucket: "event-5ade0.appspot.com",
  messagingSenderId: "1074991414283",
  appId: "1:1074991414283:web:fe6647bd4f13e911c1db0e",
  measurementId: "G-HQWPLBJF27"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db };