import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyA3QY49r8nXiVOkW1CRXWC0rgbW9iyDODc",
  authDomain: "learn-firebase-90f76.firebaseapp.com",
  projectId: "learn-firebase-90f76",
  storageBucket: "learn-firebase-90f76.appspot.com",
  messagingSenderId: "986145856945",
  appId: "1:986145856945:web:2266b8622e565242337190",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init services

export const db = getFirestore(app);
export const auth = getAuth(app);
