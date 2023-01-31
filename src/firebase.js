import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAcGr2GMaKHXHtpvEK-91IOIhZQbjdnGGI",
  authDomain: "crud-6924c.firebaseapp.com",
  projectId: "crud-6924c",
  storageBucket: "crud-6924c.appspot.com",
  messagingSenderId: "346450608970",
  appId: "1:346450608970:web:52900540d851a89f6537b3",
  measurementId: "G-YSW55JERRF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
