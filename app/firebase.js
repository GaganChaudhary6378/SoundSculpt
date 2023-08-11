// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfc2p9m9OxyLBeNlL25OVBbZX5SJwP86c",
  authDomain: "soundsculpt-eef11.firebaseapp.com",
  projectId: "soundsculpt-eef11",
  storageBucket: "soundsculpt-eef11.appspot.com",
  messagingSenderId: "655239528610",
  appId: "1:655239528610:web:20debc66f89780192457fb",
  measurementId: "G-9GMH3H7F90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);