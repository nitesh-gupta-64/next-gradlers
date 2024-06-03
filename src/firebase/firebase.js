import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Main Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDD6G_Ddex3Ti9Te0O2u0NUmzOuV6gpwl8",
  authDomain: "atcollegeconnect.firebaseapp.com",
  projectId: "atcollegeconnect",
  storageBucket: "atcollegeconnect.appspot.com",
  messagingSenderId: "318895653677",
  appId: "1:318895653677:web:37200153f3066d64c289a4",
  measurementId: "G-622X6DKKG4"
};

// // Demo Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyBg75ZxxDkY49mt15VJLQUNzWBrc6JAyVE",
//     authDomain: "aistear-unica-33f55.firebaseapp.com",
//     projectId: "aistear-unica-33f55",
//     storageBucket: "aistear-unica-33f55.appspot.com",
//     messagingSenderId: "873344322738",
//     appId: "1:873344322738:web:2c9f60febcd93161590dab"
//   };
  

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, auth };