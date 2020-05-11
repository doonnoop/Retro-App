import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD2glP5wVnVHLFjyA6V-sOxs02Z32p8c0c",
  authDomain: "retroapp-f5a4e.firebaseapp.com",
  databaseURL: "https://retroapp-f5a4e.firebaseio.com",
  projectId: "retroapp-f5a4e",
  storageBucket: "retroapp-f5a4e.appspot.com",
  messagingSenderId: "875648643758",
  appId: "1:875648643758:web:fa973036bac73c1497733f",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };
