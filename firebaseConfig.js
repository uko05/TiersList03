// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAl9buAGGkoApCzmnJMcDPAe8DwaNZlwU8",
  authDomain: "starrail-bakatare03.firebaseapp.com",
  projectId: "starrail-bakatare03",
  storageBucket: "starrail-bakatare03.firebasestorage.app",
  messagingSenderId: "141456317482",
  appId: "1:141456317482:web:206cde0b6acadc9759b753",
  measurementId: "G-PFXCD9SQSG"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
