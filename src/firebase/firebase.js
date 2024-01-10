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
  apiKey: "AIzaSyAMVn6shk1QFsKe0BxuDegHB0aIpofXltM",
  authDomain: "rdt-website-f8bfa.firebaseapp.com",
  projectId: "rdt-website-f8bfa",
  storageBucket: "rdt-website-f8bfa.appspot.com",
  messagingSenderId: "383007195783",
  appId: "1:383007195783:web:e926cb9a032b579f03ae22",
  measurementId: "G-T0QV0Z0HML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getDatabase()

export { db, auth }
