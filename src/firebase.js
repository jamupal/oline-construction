import firebase from "firebase/compat/app";
import {collection, doc, query, where, deleteDoc, getDocs, getFirestore, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

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

const auth = getAuth(firebaseApp);
const db = getFirestore();
const colletionRef = (table) => collection(db, table);
const docRef = (table) => doc(db, table);
const q = (param, table) => {return query(colletionRef(table), where("category", "==", param))};

export {auth};

export const getProduct = (table) => getDocs(colletionRef(table));

export const getDataFiter = (param, table) => getDocs(q( param, table));

export const createInfo = (params, table) => setDoc(docRef(table), params);

export const getRol = (table) => getDoc(docRef(table));

export const updatetes = (params,table) => updateDoc(docRef(table), params);

export const deleteDocument = (table) => deleteDoc(docRef(table)); 

