
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

 const firebaseConfig = {
   apiKey: "AIzaSyClDCCNp9jiR8Vjc7Rjeo1pSPUxzl81gPI",
    authDomain: "myevent-7fc86.firebaseapp.com",
   databaseURL: "https://myevent-7fc86-default-rtdb.firebaseio.com",
   projectId: "myevent-7fc86",
    storageBucket: "myevent-7fc86.appspot.com",
   messagingSenderId: "1061181086393",
   appId: "1:1061181086393:web:55334f85a53ecdbafd9968"
 };


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)