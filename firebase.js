// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdLH3DWoAWYWYFHid5C8laFFSqZc0mK7k",
  authDomain: "glamkey-eafa4.firebaseapp.com",
  projectId: "glamkey-eafa4",
  storageBucket: "glamkey-eafa4.firebasestorage.app",
  messagingSenderId: "397021622254",
  appId: "1:397021622254:web:4a1ca27de85117cd6ba8ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export the auth object
