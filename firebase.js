// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB50lJORAyX5VsC1Koj8o5QYlmuyuX7-jQ",
  authDomain: "presentation-df49d.firebaseapp.com",
  projectId: "presentation-df49d",
  storageBucket: "presentation-df49d.firebasestorage.app",
  messagingSenderId: "106952202342",
  appId: "1:106952202342:web:54e92e5d3cc867879b75a7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
