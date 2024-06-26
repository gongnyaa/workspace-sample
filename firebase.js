// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtaG8sBMtMqq7t53fX3WsnMoLQUCC1ifI",
  authDomain: "workspace-sample-e74b2.firebaseapp.com",
  projectId: "workspace-sample-e74b2",
  storageBucket: "workspace-sample-e74b2.appspot.com",
  messagingSenderId: "445290154477",
  appId: "1:445290154477:web:8999c0a2324a22318b7fe4",
  measurementId: "G-BCC43JHNPW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
