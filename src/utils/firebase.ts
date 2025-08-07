// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJOKWGeFmO15iGIykBKhdP63wqk1OzZLA",
  authDomain: "netflix-gpt-d7695.firebaseapp.com",
  projectId: "netflix-gpt-d7695",
  storageBucket: "netflix-gpt-d7695.firebasestorage.app",
  messagingSenderId: "480355543151",
  appId: "1:480355543151:web:866231cc9da5d7fc89459a",
  measurementId: "G-6BHSTQL5S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
