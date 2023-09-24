import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDQWni-tbtwdRozHckIYxj7H75b4gZlSIU",
  authDomain: "video-2fbb2.firebaseapp.com",
  projectId: "video-2fbb2",
  storageBucket: "video-2fbb2.appspot.com",
  messagingSenderId: "113070004170",
  appId: "1:113070004170:web:9c366d4ff0afdd85ee6133"
};

firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
