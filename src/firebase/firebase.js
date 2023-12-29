// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUkTi27fRKjGhPN8tCu_r5LVaS7hkcO0M",
  authDomain: "airplane-50024.firebaseapp.com",
  projectId: "airplane-50024",
  storageBucket: "airplane-50024.appspot.com",
  messagingSenderId: "996325037385",
  appId: "1:996325037385:web:ed6897997dd436d8f4b698",
  measurementId: "G-5KTLKZ6Q6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getDatabase()

export { db, auth }
