// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBKSfMLTSMuC5ijgMyOPIUaxuqxS8VJaoI",
  authDomain: "auth-b6de6.firebaseapp.com",
  projectId: "auth-b6de6",
  storageBucket: "auth-b6de6.appspot.com",
  messagingSenderId: "769744368048",
  appId: "1:769744368048:web:a2ac76b025a55b92b8a675",
  measurementId: "G-0EJT3LYMK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };


/* export default {
    apiKey: "AIzaSyBKSfMLTSMuC5ijgMyOPIUaxuqxS8VJaoI",
  authDomain: "auth-b6de6.firebaseapp.com",
  projectId: "auth-b6de6",
  storageBucket: "auth-b6de6.appspot.com",
  messagingSenderId: "769744368048"
} */