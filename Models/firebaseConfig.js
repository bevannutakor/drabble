import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth'; //

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
export { firebase, db }
