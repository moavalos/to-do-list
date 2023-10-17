// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEQzjzbqySNdK4VE2og6JOg-jiZYNNXEI",
  authDomain: "to-do-list-4a259.firebaseapp.com",
  projectId: "to-do-list-4a259",
  storageBucket: "to-do-list-4a259.appspot.com",
  messagingSenderId: "1027748667153",
  appId: "1:1027748667153:web:0c54b3f067b9cfe28eb6b0",
  measurementId: "G-2JNCCHEHW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);