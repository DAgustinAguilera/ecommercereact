import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";





const firebaseConfig = {
  apiKey: "AIzaSyDExj0eu80WwC5_BQ7E1LI1tbhz2d_X71k",
  authDomain: "e-commerce-aguilera.firebaseapp.com",
  projectId: "e-commerce-aguilera",
  storageBucket: "e-commerce-aguilera.appspot.com",
  messagingSenderId: "779675467430",
  appId: "1:779675467430:web:62a3160b5d964ffc73fe67"
};

const app = initializeApp(firebaseConfig);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
