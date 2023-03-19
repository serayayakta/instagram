import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbHwpBCkJ_21PbQpn7R4i4qrtfhTATyiE",
  authDomain: "instagram-3ac83.firebaseapp.com",
  projectId: "instagram-3ac83",
  storageBucket: "instagram-3ac83.appspot.com",
  messagingSenderId: "544322665540",
  appId: "1:544322665540:web:0edbdfef7d15206b2f9011",
  measurementId: "G-H1XN1QM4VF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
