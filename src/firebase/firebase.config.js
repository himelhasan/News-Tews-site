// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBckhTJhNhMSvssUlE4qgiRG8JywyISMyw",
  authDomain: "news-tews.firebaseapp.com",
  projectId: "news-tews",
  storageBucket: "news-tews.appspot.com",
  messagingSenderId: "870673929683",
  appId: "1:870673929683:web:0d9599041aa766eaa18b26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
