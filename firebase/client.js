import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD6pzxCOvvlS0AT_l0zNJnJcUCXtkkZw8g",
  authDomain: "devter-edf32.firebaseapp.com",
  projectId: "devter-edf32",
  storageBucket: "devter-edf32.appspot.com",
  messagingSenderId: "815177621579",
  appId: "1:815177621579:web:1394ae1293ad18ba776dce",
  measurementId: "G-M4RJE4J2YZ"
}

!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const {displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = mapUserFromFirebaseAuthToUser(user)
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}