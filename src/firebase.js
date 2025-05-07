// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtRKEtQg1Z-kz9xGlZFIH096pupXVIBp0",
  authDomain: "nuekagi.firebaseapp.com",
  projectId: "nuekagi",
  storageBucket: "nuekagi.firebasestorage.app",
  messagingSenderId: "180660338244",
  appId: "1:180660338244:web:9f88806756729146378611",
  measurementId: "G-0WCF5Z18KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

export {db , auth}
