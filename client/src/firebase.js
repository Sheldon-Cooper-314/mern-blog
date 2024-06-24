// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-new-70f5c.firebaseapp.com",
  projectId: "mern-blog-new-70f5c",
  storageBucket: "mern-blog-new-70f5c.appspot.com",
  messagingSenderId: "158884184114",
  appId: "1:158884184114:web:853562f95211e2add6bc2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);