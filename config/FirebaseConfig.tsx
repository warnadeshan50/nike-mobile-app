// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUD5V0MsfpwsRuRWUEjm5508kLXP9HWcE",
  authDomain: "nike-shoe-store-5447a.firebaseapp.com",
  projectId: "nike-shoe-store-5447a",
  storageBucket: "nike-shoe-store-5447a.appspot.com",
  messagingSenderId: "997393354463",
  appId: "1:997393354463:web:6880783cb22bc61932a36a",
  measurementId: "G-197WM7TV9B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
