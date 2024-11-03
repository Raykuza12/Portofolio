// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnLJ5KUp_ds0oD-3up31Os4UzikGLndNs",
  authDomain: "cv-online-34c49.firebaseapp.com",
  projectId: "cv-online-34c49",
  storageBucket: "cv-online-34c49.firebasestorage.app",
  messagingSenderId: "500464045761",
  appId: "1:500464045761:web:fe8a2177dc4b72e9608e40",
  measurementId: "G-RX71147RZY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
