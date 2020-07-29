import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyAuHg9LUAiKH12ApJoYbbGFb63u7KEs7zQ",
    authDomain: "react-slack-clone-38a52.firebaseapp.com",
    databaseURL: "https://react-slack-clone-38a52.firebaseio.com",
    projectId: "react-slack-clone-38a52",
    storageBucket: "react-slack-clone-38a52.appspot.com",
    messagingSenderId: "51275643224",
    appId: "1:51275643224:web:e4c978d39c3b7913ddcd2d",
    measurementId: "G-H24K7L8KQW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;