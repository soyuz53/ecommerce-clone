// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaPnmYtToXl51p0LSdqsfJedP7vCkPA7E",
  authDomain: "myown-ecommerce.firebaseapp.com",
  projectId: "myown-ecommerce",
  storageBucket: "myown-ecommerce.appspot.com",
  messagingSenderId: "792364654021",
  appId: "1:792364654021:web:b21b9aa0dfa7838cecffac",
  measurementId: "G-9F9T86J0L8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
