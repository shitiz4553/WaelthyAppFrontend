
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
//config file here
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const AUTH = getAuth(FIREBASE_APP);