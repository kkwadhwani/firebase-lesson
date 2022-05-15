import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  query,
  onSnapshot
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvlbWuqhZnKiuHjHLwjpFs3WT8W6quGLc",
  authDomain: "react-native-a0092.firebaseapp.com",
  projectId: "react-native-a0092",
  storageBucket: "react-native-a0092.appspot.com",
  messagingSenderId: "148185820101",
  appId: "1:148185820101:web:a749c22fa4c34d6ab179ac",
  measurementId: "G-SNZMXJYNGN",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Adding document
const c = collection(db, "restaurants");
const data = {
  name: "Banana Leaf",
  year_started: 1990,
  cuisine: ["Punjabi", "Rajasthani"],
  location: "Prahalad Nagar",
  closed: false,
};



const form = document.getElementById("myform");
const check = document.getElementById("closed");

form.addEventListener("submit", addDocument);

async function addDocument(e) {
  e.preventDefault();

  const name = form.name.value;
  const year = form.year.value;
  const totalCuisines = form.cuisine.value;

  //split cuisine
  const cuisine = totalCuisines.split(',')
  const location = form.location.value
  const isclosed = check.checked;

  const data = {
      name, year, cuisine, location, isclosed
  }

  try {
    const docRef = await addDoc(c, data);
    console.log("Document is set with ", docRef.id);
    form.reset();
  } catch (e) {
    console.log(e);
  }
}

const resList = document.getElementById("res-list")

const q = query(collection(db, "restaurants"))

 const unsubscribe = onSnapshot(q, (snapshot)=>{
     let restaurants = []
     snapshot.forEach((item)=>{
         restaurants.push(item.data())
       
        
     })
    console.log(restaurants)
 })



