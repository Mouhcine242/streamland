// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDTPJNRocodzp5xgrpqQu5K3yqg6gr-cs",
  authDomain: "firchat-f0afe.firebaseapp.com",
  projectId: "firchat-f0afe",
  storageBucket: "firchat-f0afe.appspot.com",
  messagingSenderId: "830189786915",
  appId: "1:830189786915:web:def80b410af23e0013de96",
  measurementId: "G-SL9NE40DDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export{db , auth}

