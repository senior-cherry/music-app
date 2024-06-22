import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2Kf28TMwQTmeo53j8tF1RkC-3YgcGuF8",
  authDomain: "music-app-2a410.firebaseapp.com",
  projectId: "music-app-2a410",
  storageBucket: "music-app-2a410.appspot.com",
  messagingSenderId: "584906303451",
  appId: "1:584906303451:web:83cd3c3e8ed28d682aa9fe",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
