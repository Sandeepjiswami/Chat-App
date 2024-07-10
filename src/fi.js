// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLRa5wpXjte6BTms6n0ljbPHtjXGHoBaM",
  authDomain: "chat-f1dd3.firebaseapp.com",
  projectId: "chat-f1dd3",
  storageBucket: "chat-f1dd3.appspot.com",
  messagingSenderId: "971848777308",
  appId: "1:971848777308:web:6acb08c4d8cb5f3b8fb099"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();