// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxcX2HyaHiQncZTZZKfcGxBDMowzy-7xE",
  authDomain: "thesis-archive-system-e6c42.firebaseapp.com",
  projectId: "thesis-archive-system-e6c42",
  storageBucket: "thesis-archive-system-e6c42.firebasestorage.app",
  messagingSenderId: "546130324025",
  appId: "1:546130324025:web:e7a15f5e286eaf0852bbe8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
