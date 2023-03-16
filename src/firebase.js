// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzz32wif92o4VOSn4VpqFc-nm5col43sk",
  authDomain: "open-chatroom-react.firebaseapp.com",
  projectId: "open-chatroom-react",
  storageBucket: "open-chatroom-react.appspot.com",
  messagingSenderId: "1036975715629",
  appId: "1:1036975715629:web:22f428d07aad0f12ddcfa4",
  measurementId: "G-6N7BTV0PRM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);

// Create a root reference
export const storage = getStorage();