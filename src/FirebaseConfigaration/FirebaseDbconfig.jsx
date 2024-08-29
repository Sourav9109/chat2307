import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqSQTeSYo9Y-Uqjmqi0HTP4j3yHLv6VVY",
  authDomain: "chat2307-9b2ad.firebaseapp.com",
  projectId: "chat2307-9b2ad",
  storageBucket: "chat2307-9b2ad.appspot.com",
  messagingSenderId: "210659665688",
  appId: "1:210659665688:web:49ac4d795f5fd4d477e06d",
};

// Initialize Firebase
const dbapp = initializeApp(firebaseConfig);
console.log("database instalation done ");
export default dbapp;
