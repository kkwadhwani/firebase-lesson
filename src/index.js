import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, collection, addDoc } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvlbWuqhZnKiuHjHLwjpFs3WT8W6quGLc",
    authDomain: "react-native-a0092.firebaseapp.com",
    projectId: "react-native-a0092",
    storageBucket: "react-native-a0092.appspot.com",
    messagingSenderId: "148185820101",
    appId: "1:148185820101:web:a749c22fa4c34d6ab179ac",
    measurementId: "G-SNZMXJYNGN"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);


  //Adding document

  