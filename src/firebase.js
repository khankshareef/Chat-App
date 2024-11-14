// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLNNcfnEyIWNH8V07-VHhYRz93Z3OMXXU",
  authDomain: "chat-1d61b.firebaseapp.com",
  projectId: "chat-1d61b",
  storageBucket: "chat-1d61b.firebasestorage.app",
  messagingSenderId: "102235779369",
  appId: "1:102235779369:web:ed4505517f253b59944738",
  measurementId: "G-KLT3ZZFYGF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()