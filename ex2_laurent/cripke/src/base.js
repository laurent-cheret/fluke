import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBhNZZCwwudC6jyIG9l2Cd7UAsibX0WfeU",
        authDomain: "cripke-d7f3e.firebaseapp.com",
        databaseURL: "https://cripke-d7f3e.firebaseio.com",
        projectId: "cripke-d7f3e",
        storageBucket: "cripke-d7f3e.appspot.com",
        messagingSenderId: "48228465896",
        appId: "1:48228465896:web:7fac44c091831b02ca5d5d",
        measurementId: "G-7T33M72QKW"
    }
)

export default app;