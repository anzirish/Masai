// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCW7AkzsTlNhtnGVIB5dBZwwnxeY92tG4I",
  authDomain: "react-252ca.firebaseapp.com",
  projectId: "react-252ca",
  storageBucket: "react-252ca.appspot.com",
  messagingSenderId: "971005873981",
  appId: "1:971005873981:web:261bfce111d1e3d82cff54",
  measurementId: "G-DVZV2TL488",
  databaseURL: "https://react-252ca-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
