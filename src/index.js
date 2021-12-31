import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCp99aVQkaxYLls_WWe8gg2WcGLBC6VD4U",
  authDomain: "cart-cde73.firebaseapp.com",
  projectId: "cart-cde73",
  storageBucket: "cart-cde73.appspot.com",
  messagingSenderId: "1046532359387",
  appId: "1:1046532359387:web:cd0a1824002347162038fe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


