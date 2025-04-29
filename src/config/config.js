import {initializeApp} from 'firebase/app'
import {getFirestore, serverTimestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage';


//sokthinqwe22@gmail.com 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlhWyzOMuHzWgJoU7wVK6KgUhLWL54HnY",
  authDomain: "db-onlinev2.firebaseapp.com",
  projectId: "db-onlinev2",
  storageBucket: "db-onlinev2.firebasestorage.app",
  messagingSenderId: "633634370264",
  appId: "1:633634370264:web:e7961c3ecb3da6bed29dad",
  measurementId: "G-30VC4K9EPK"
};

const firebaseApp = initializeApp(firebaseConfig)
const projectFirestore = getFirestore(firebaseApp)
const projectAuth = getAuth(firebaseApp)
const projectStorage = getStorage(firebaseApp)
const timestamp= serverTimestamp;


export {projectFirestore, projectAuth,timestamp, projectStorage}