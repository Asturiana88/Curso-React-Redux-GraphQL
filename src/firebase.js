import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyC52bRK79Dmo0Tg9NrGF6h1Qaso0rMOMak",
  authDomain: "react-firebase-bc91d.firebaseapp.com",
  databaseURL: "https://react-firebase-bc91d.firebaseio.com",
  projectId: "react-firebase-bc91d",
  storageBucket: "react-firebase-bc91d.appspot.com",
  messagingSenderId: "102167658829",
  appId: "1:102167658829:web:bc5a68ed49a2884beaf704",
  measurementId: "G-XHYWT6ZJGQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebase.analytics();

  let db = firebaseApp.firestore().collection('favs')

  export function getFavs(uid){
   return db.doc(uid).get()
   .then(snap =>{
     return snap.data().array
   })
  }

  export function updateBD(array, uid){
   return db.doc(uid).set({array})
  }

  export function signOutGoogle(){
    firebase.auth().signOut()
  }

  export function loginWithGoogle(){
      let provider = new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
        .then(snap=> snap.user)
  }