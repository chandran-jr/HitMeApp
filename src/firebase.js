// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpuTUZe5CtcXlPN-_cHEsZYahVZ-ffFVs",
  authDomain: "hitmeapp-4346e.firebaseapp.com",
  projectId: "hitmeapp-4346e",
  storageBucket: "hitmeapp-4346e.appspot.com",
  messagingSenderId: "1098359495362",
  appId: "1:1098359495362:web:2f12342279db97b9e7f95b",
  measurementId: "G-83V1291TRJ"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;