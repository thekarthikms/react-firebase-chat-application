import firebase from 'firebase/firebase'
import firebaseConfig from "./firebase-config"

firebase.initializeApp(firebaseConfig)
let db=firebase.firestore()
let UserRef = db.collection('users')
let ChatRef = db.collection('chat')

export {UserRef,ChatRef}