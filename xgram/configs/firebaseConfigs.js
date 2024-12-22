import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC55Yu_qp5nujCT7uCFyL5rQU2h8cyIW_M",
  authDomain: "xgram-56635.firebaseapp.com",
  projectId: "xgram-56635",
  storageBucket: "xgram-56635.firebasestorage.app",
  messagingSenderId: "91140734115",
  appId: "1:91140734115:web:440a7ee0dacaf564df1316",
  measurementId: "G-H3R2WFCWBW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore
