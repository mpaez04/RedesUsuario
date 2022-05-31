// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyB7h96RP6nHHA9Sa5aCRhQ-kHbWTYsNHfY",
  authDomain: "proyectoredes-a8f3c.firebaseapp.com",
  projectId: "proyectoredes-a8f3c",
  storageBucket: "proyectoredes-a8f3c.appspot.com",
  messagingSenderId: "706814176187",
  appId: "1:706814176187:web:1633859ac1a2a1cd21b29e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)