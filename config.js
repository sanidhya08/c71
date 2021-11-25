import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyD9nG6fYaaRw_PVaGiKj3-nnwqR5OW8YpU",
    authDomain: "willyapp-4fcb1.firebaseapp.com",
    projectId: "willyapp-4fcb1",
    storageBucket: "willyapp-4fcb1.appspot.com",
    messagingSenderId: "1019986891895",
    appId: "1:1019986891895:web:2a5fd3e1bae0edd7536272"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase.firestore()