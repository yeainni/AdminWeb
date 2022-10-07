import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  // apiKey: "AIzaSyAkuoIo_tHQISz-ybtRknwSeT7YGXw_ubo",
  authDomain: "adminweb-32d74.firebaseapp.com",
  projectId: "adminweb-32d74",
  storageBucket: "adminweb-32d74.appspot.com",
  messagingSenderId: "922445247840",
  // appId: "1:922445247840:web:45a3de602647c454485a05",
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: "G-YSNRFNCJ0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();