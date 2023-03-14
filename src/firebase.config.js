// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCa7LV7-sa3Xgz7zStFBRxJFEQgvinj2Gw",
    authDomain: "multimart-a2386.firebaseapp.com",
    projectId: "multimart-a2386",
    storageBucket: "multimart-a2386.appspot.com",
    messagingSenderId: "403072995214",
    appId: "1:403072995214:web:711c2cedf4dd48b8addedf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app; 