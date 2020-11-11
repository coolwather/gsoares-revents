import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBzwCMIvHq7303sY9imLla0FGzcdGGqYxI",
    authDomain: "gsoares-revents.firebaseapp.com",
    databaseURL: "https://gsoares-revents.firebaseio.com",
    projectId: "gsoares-revents",
    storageBucket: "gsoares-revents.appspot.com",
    messagingSenderId: "794422697059",
    appId: "1:794422697059:web:8219c763572006a51dac56"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
