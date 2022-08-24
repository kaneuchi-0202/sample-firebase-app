// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiBQuUVA1_mNZ1l05tZXecFJXDZ647NrI",
  authDomain: "sample-app-ee917.firebaseapp.com",
  projectId: "sample-app-ee917",
  storageBucket: "sample-app-ee917.appspot.com",
  messagingSenderId: "148200244120",
  appId: "1:148200244120:web:3e9c3c19c44cc957c6a1ed",
  measurementId: "G-QD1ZSQ2104",
};

// Initialize Firebase
const firebaseInit = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return { app: app, analytics: analytics };
};

export default firebaseInit;
