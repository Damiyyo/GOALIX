// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsrPQDoiN2MLXmWs2VfQWzHdgRUxcd69c",
  authDomain: "goalix001.firebaseapp.com",
  projectId: "goalix001",
  storageBucket: "goalix001.firebasestorage.app",
  messagingSenderId: "661730347930",
  appId: "1:661730347930:web:0c44709a12a7df6a434823",
  measurementId: "G-0T472VVHP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAuth(app);