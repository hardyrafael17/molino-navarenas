// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuEx6XIoScZBfMb_LadVResZMQe3vUQqo",
  authDomain: "molino-navarenas-39543.firebaseapp.com",
  projectId: "molino-navarenas-39543",
  storageBucket: "molino-navarenas-39543.appspot.com",
  messagingSenderId: "241287955200",
  appId: "1:241287955200:web:140b47bad716905deea9e5",
  measurementId: "G-LXL2QYSW2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
