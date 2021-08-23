import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

 // const firebaseConfig = {
 //    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
 //    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
 //    projectId: process.env. REACT_APP_FIREBASE_PROJECT_ID,
 //    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
 //    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
 //    appId: process.env.REACT_APP_FIREBASE_APP_ID
 // };

const firebaseConfig = {
    apiKey: "AIzaSyD5nU8NUdT7FEXCVf3IKUQ75BOOsKBn7No",
    authDomain: "register-form-4fb1a.firebaseapp.com",
    databaseURL: "https://register-form-4fb1a-default-rtdb.firebaseio.com",
    projectId: "register-form-4fb1a",
    storageBucket: "register-form-4fb1a.appspot.com",
    messagingSenderId: "163148870290",
    appId: "1:163148870290:web:848f1f004a3ea6a8b7ec4b"
};


class MainFirebase {
    auth: any;
    database: any;
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.database = firebase.database();
    }
    createUserWithEmailAndPassword = (email: string, password:  string | number) => {
       return this.auth.createUserWithEmailAndPassword(email, password);
    }
    signInWithEmailAndPassword = (email: string, password:  string | number) => {
       return this.auth.signInWithEmailAndPassword(email, password);
    }
}

const Firebase = new MainFirebase();

export default Firebase;















//https://www.youtube.com/watch?v=E965Jzf7vhc