// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCSNv3_CCWuZGyngRq8j46XBSfZ6GVoCU",
  authDomain: "react-task-c9db8.firebaseapp.com",
  projectId: "react-task-c9db8",
  storageBucket: "react-task-c9db8.appspot.com",
  messagingSenderId: "172662609200",
  appId: "1:172662609200:web:0ae1d7016a909fbac8a4f5",
  databaseURL: "https://react-task-c9db8-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);