import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoQpDtDKlHFdRWU2PLzXfw_vKqAs8LNNk",
  authDomain: "slowjournal-f60eb.firebaseapp.com",
  projectId: "slowjournal-f60eb",
  storageBucket: "slowjournal-f60eb.firebasestorage.app",
  messagingSenderId: "1559019686",
  appId: "1:1559019686:web:42b2f3f059e202d16ff467",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
