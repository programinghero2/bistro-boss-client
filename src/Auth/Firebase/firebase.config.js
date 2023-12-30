import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC_I41ymk5IuKac-qk9zqBq4eXrBDBOgPc",
  authDomain: "bistroboss-5fc1a.firebaseapp.com",
  projectId: "bistroboss-5fc1a",
  storageBucket: "bistroboss-5fc1a.appspot.com",
  messagingSenderId: "83689218043",
  appId: "1:83689218043:web:716ab3ed7c1e4fdee3755e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;