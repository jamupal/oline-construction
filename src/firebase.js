import firebase from "firebase/compat/app";
import {collection, doc, query, where, getDocs, getFirestore } from "firebase/firestore";
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBTLkp0RzgDEAMo6Fe0GzLrXgkKkKvs9KM",
  authDomain: "mypp-36e31.firebaseapp.com",
  databaseURL: "https://mypp-36e31.firebaseio.com",
  projectId: "mypp-36e31",
  storageBucket: "mypp-36e31.appspot.com",
  messagingSenderId: "224787608526",
  appId: "1:224787608526:web:411eea95e11f5a2c5fb19f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = getFirestore();
const colletionRef = collection(db, "Products");
const q = (param) => {return query(colletionRef, where("category", "==", param))};

export {auth};

export const getProduct = () => getDocs(colletionRef);

export const getDataFiter = (param) => getDocs(q(param));

