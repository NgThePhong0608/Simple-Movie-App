// src/firebase.js
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAKane9ejLaE8JccXchmByO9n0T5Qb5lOE',
  authDomain: 'simple-movie-2ad42.firebaseapp.com',
  projectId: 'simple-movie-2ad42',
  storageBucket: 'simple-movie-2ad42.appspot.com',
  messagingSenderId: '680222898808',
  appId: '1:680222898808:web:8f18ff5f5e8e338c664b8d',
  measurementId: 'G-GQDRN7JMVE'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
