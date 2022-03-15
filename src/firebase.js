// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbIGZ9W3PL61w4oV8ycSjZAkaq5tH6UIo",
  authDomain: "repl-b4fd4.firebaseapp.com",
  projectId: "repl-b4fd4",
  storageBucket: "repl-b4fd4.appspot.com",
  messagingSenderId: "234374847603",
  appId: "1:234374847603:web:581eacb7e4145fae2c1e06",
  measurementId: "G-529B9VHMWY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();