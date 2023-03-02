import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Firebase config
//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //configuration info
  databaseURL:"https://animal-mafia-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyDYn91mXac89AmMyOFSgsIeYEmidtP9r2E",
  authDomain: "animal-mafia.firebaseapp.com",
  projectId: "animal-mafia",
  storageBucket: "animal-mafia.appspot.com",
  messagingSenderId: "600677784715",
  appId: "1:600677784715:web:106f274767125eeebb888e",
  measurementId: "G-7HRPQDPZ60"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

export default firebase;