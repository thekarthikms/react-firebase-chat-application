import firebase from 'firebase/firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDdzVa72eFtGrjIb3j98q8cGMpjeGLMVIM",
  authDomain: "firechat-7acda.firebaseapp.com",
  projectId: "firechat-7acda",
  storageBucket: "firechat-7acda.appspot.com",
  messagingSenderId: "215612547241",
  appId: "1:215612547241:web:559d89a728bde05cadc9b8"
};

firebase.initializeApp(firebaseConfig)
let db=firebase.firestore()
let UserRef = db.collection('users')
let ChatRef = db.collection('chat')

export {UserRef,ChatRef}