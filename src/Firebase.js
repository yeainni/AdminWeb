import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "adminweb-32d74.firebaseapp.com",
  projectId: "adminweb-32d74",
  storageBucket: "adminweb-32d74.appspot.com",
  messagingSenderId: "922445247840",
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: "G-YSNRFNCJ0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);