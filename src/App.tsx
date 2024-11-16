import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDRiCMeh-4ha62WtoItejVwwKqeYBnljEg',
  authDomain: 'buddy-hub-chat.firebaseapp.com',
  projectId: 'buddy-hub-chat',
  storageBucket: 'buddy-hub-chat.firebasestorage.app',
  messagingSenderId: '385803532710',
  appId: '1:385803532710:web:3de53f523b6c9600543767',
  measurementId: 'G-63XPP7YHWT',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics(app)

function App() {
  return <div>안녕</div>
}

export default App
