import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwM-WMRvdOFiv_ADwkbtxhIK9fjHONMKQ",
  authDomain: "linkdein-clone-cd9ff.firebaseapp.com",
  projectId: "linkdein-clone-cd9ff",
  storageBucket: "linkdein-clone-cd9ff.appspot.com",
  messagingSenderId: "1060492802339",
  appId: "1:1060492802339:web:dbc6327f1daac03cc07496",
  measurementId: "G-4KSTNLTEFC"
};
const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };