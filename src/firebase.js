import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCNXSon6fULVPAlKHKLRe3Fdp4s6URzfRY",
  authDomain: "plant-ar.firebaseapp.com",
  projectId: "plant-ar",
  storageBucket: "plant-ar.appspot.com",
  messagingSenderId: "911778124299",
  appId: "1:911778124299:web:8603f9e5bf31f9b4106d0e"
})

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
