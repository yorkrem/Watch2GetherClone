// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgbN3IMZYxz63k5eA35TcWgYtI1Mfcc_M",
  authDomain: "watch2gether-424808.firebaseapp.com",
  projectId: "watch2gether-424808",
  storageBucket: "watch2gether-424808.appspot.com",
  messagingSenderId: "1096396187649",
  appId: "1:1096396187649:web:7c8d337067c19866563800",
  measurementId: "G-6GE8ERS50M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
//const analytics = getAnalytics(app);

export {createUserWithEmailAndPassword, auth, signInWithEmailAndPassword, signOut};

export default app;
