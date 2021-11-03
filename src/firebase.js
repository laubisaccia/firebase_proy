// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
/* import { initializeApp } from "firebase/app"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6fDqor6VhqH7ZmBObtodx6ozo7kXYm9Q",
  authDomain: "proyecto-prueba-mundo.firebaseapp.com",
  projectId: "proyecto-prueba-mundo",
  storageBucket: "proyecto-prueba-mundo.appspot.com",
  messagingSenderId: "494978732435",
  appId: "1:494978732435:web:95328996523776e8c81866"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()
export default firebase;