import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCNRGIes84rkZPeifz0A9sPTD6RKfQsWvU",
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "mj-admin.firebaseapp.com",
  projectId: "mj-admin",
  storageBucket: "mj-admin.appspot.com",
  messagingSenderId: "735322095406",
  // appId: "1:735322095406:web:fcc70610053251c8ea84bf"
  appId: process.env.FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
// var db = firebase.firestore();