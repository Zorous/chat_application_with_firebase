// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUJ5RBAY22lag9BGKwAOMwNgVcEl0L3nU",
  authDomain: "open-chat-room-639e9.firebaseapp.com",
  projectId: "open-chat-room-639e9",
  storageBucket: "open-chat-room-639e9.appspot.com",
  messagingSenderId: "62707049598",
  appId: "1:62707049598:web:a9cd9c958f5d66bcc5e42f",
  measurementId: "G-7SWM8VGYDW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
