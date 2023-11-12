
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5bn_hytd-4dKrm5-aehbf6RrwgBuJHPI",
  authDomain: "losperroamigos-ef2cc.firebaseapp.com",
  projectId: "losperroamigos-ef2cc",
  storageBucket: "losperroamigos-ef2cc.appspot.com",
  messagingSenderId: "498931176498",
  appId: "1:498931176498:web:09380d2b0ea4630866982b",
  measurementId: "G-HFX6HZEY91"
};
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(firebaseConfig)

export default appFirebase;