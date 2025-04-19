// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvx5x85GrRr70Xe4ahm5pJAq6xYIgvDBU",
  authDomain: "miguelrochaxavier-dev.firebaseapp.com",
  projectId: "miguelrochaxavier-dev",
  storageBucket: "miguelrochaxavier-dev.firebasestorage.app",
  messagingSenderId: "599823400475",
  appId: "1:599823400475:web:0dbec6168cdd872e6502be",
  measurementId: "G-CEBVTKKM7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);