import * as firebase from 'firebase/app'
import * as firestore from 'firebase/firestore'

// Replace these values with your Firebase project's configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBh0kzCd26OP2P6hRJYWReNYnPZX75GAeo',
  authDomain: 'bittopia-eff37.firebaseapp.com',
  projectId: 'bittopia-eff37',
  storageBucket: 'bittopia-eff37.appspot.com',
  messagingSenderId: '600477991868',
  appId: '1:600477991868:web:33a0f54991cf6f292061b9',
  measurementId: 'G-WYYR5DGHBY'
}

// Initialize Firebase with a "default" Firebase project
firebase.initializeApp(firebaseConfig)

export const db = firestore.getFirestore()
