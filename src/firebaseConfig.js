// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfy-48oVZCEUvyEKFfeAYkiU0D81PADco",
  authDomain: "todo-cws-63d3d.firebaseapp.com",
  databaseURL: "https://todo-cws-63d3d-default-rtdb.firebaseio.com",
  projectId: "todo-cws-63d3d",
  storageBucket: "todo-cws-63d3d.appspot.com",
  messagingSenderId: "730827999830",
  appId: "1:730827999830:web:f379621ffe5475399b49f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)

const auth = getAuth(app);

export {
    db,
    auth
}