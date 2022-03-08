import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBZS1aabGLtn1_82qPIzZ51yXQmsCDwpHQ",
        authDomain: "clone-5b999.firebaseapp.com",
        projectId: "clone-5b999",
        storageBucket: "clone-5b999.appspot.com",
        messagingSenderId: "67689973618",
        appId: "1:67689973618:web:f90dd0fbd0bd0777287feb",
      
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};