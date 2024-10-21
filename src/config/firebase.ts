import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt_cQqSy6t-jpUn-TiIoeqlGXGZ-Zj0so",
  authDomain: "ipb-crato-73588.firebaseapp.com",
  projectId: "ipb-crato-73588",
  storageBucket: "ipb-crato-73588.appspot.com",
  messagingSenderId: "282582868651",
  appId: "1:282582868651:web:e9fbb4d18ed2e2583f4dee"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {app, db, auth}