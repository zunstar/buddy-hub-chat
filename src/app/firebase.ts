import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDRiCMeh-4ha62WtoItejVwwKqeYBnljEg',
  authDomain: 'buddy-hub-chat.firebaseapp.com',
  projectId: 'buddy-hub-chat',
  storageBucket: 'buddy-hub-chat.firebasestorage.app',
  messagingSenderId: '385803532710',
  appId: '1:385803532710:web:3de53f523b6c9600543767',
  measurementId: 'G-63XPP7YHWT',
}

// Firebase 초기화
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { app, analytics }
