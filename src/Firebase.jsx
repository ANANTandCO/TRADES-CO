// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoxj1V4wtYMbnrqjeiIxQ4WMyQmmA7GgE",
  authDomain: "tradesandco-98683.firebaseapp.com",
  projectId: "tradesandco-98683",
  storageBucket: "tradesandco-98683.appspot.com",  // ✅ Fixed this line
  messagingSenderId: "651489584973",
  appId: "1:651489584973:web:6b7a58646c9f0f4a30b904",
  measurementId: "G-2VWQ8E2T3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized successfully");
