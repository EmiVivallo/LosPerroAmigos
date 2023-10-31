
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC5bn_hytd-4dKrm5-aehbf6RrwgBuJHPI",
  authDomain: "losperroamigos-ef2cc.firebaseapp.com",
  projectId: "losperroamigos-ef2cc",
  storageBucket: "losperroamigos-ef2cc.appspot.com",
  messagingSenderId: "498931176498",
  appId: "1:498931176498:web:09380d2b0ea4630866982b",
  measurementId: "G-HFX6HZEY91"
};
const app = initializeApp(firebaseConfig);

// Obtén una instancia del módulo de autenticación
const auth = getAuth();
export default firebaseConfig;