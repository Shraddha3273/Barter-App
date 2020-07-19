import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBOQe93z-gbSciIOBfHaGKBgXcvlfKH24U",
  authDomain: "barter-app-95143.firebaseapp.com",
  databaseURL: "https://barter-app-95143.firebaseio.com",
  projectId: "barter-app-95143",
  storageBucket: "barter-app-95143.appspot.com",
  messagingSenderId: "766276955957",
  appId: "1:766276955957:web:26eb537b5e65266ab4a67c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();