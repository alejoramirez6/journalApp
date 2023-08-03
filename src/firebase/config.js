// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY6IzAbqo66CQHPu6qNvbWcq2s3a0kNHc",
  authDomain: "react-cursos-ffaf1.firebaseapp.com",
  projectId: "react-cursos-ffaf1",
  storageBucket: "react-cursos-ffaf1.appspot.com",
  messagingSenderId: "965250768157",
  appId: "1:965250768157:web:732400c571e32b77e395f4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
