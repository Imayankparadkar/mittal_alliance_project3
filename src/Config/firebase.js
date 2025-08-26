// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMczt3WhdmtZO-XltRsXBgNArasrjKkI0",
  authDomain: "mittal-main.firebaseapp.com",
  projectId: "mittal-main",
  storageBucket: "mittal-main.firebasestorage.app",
  messagingSenderId: "202879363815",
  appId: "1:202879363815:web:2064fafc44dc17cece5042",
  measurementId: "G-6GF9KQ7DPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
