import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhX7PowEGYzpAqhroNOOo9T2V7uMIVzBw",
    authDomain: "crown-db-9f455.firebaseapp.com",
    databaseURL: "https://crown-db-9f455.firebaseio.com",
    projectId: "crown-db-9f455",
    storageBucket: "crown-db-9f455.appspot.com",
    messagingSenderId: "554888997216",
    appId: "1:554888997216:web:30513d76bf8e08bc975605",
    measurementId: "G-926TRMF3PH"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;