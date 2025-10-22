// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBXeZP6uouUbXLGFVX1ufW2SBqBgHtOL4",
  authDomain: "fdfff-aa6b1.firebaseapp.com",
  databaseURL:
    "https://fdfff-aa6b1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fdfff-aa6b1",
  storageBucket: "fdfff-aa6b1.firebasestorage.app",
  messagingSenderId: "1025843588255",
  appId: "1:1025843588255:web:7d21758f5a54f0854a06aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
