import firebase from 'firebase/app'
import 'firebase/firestore'

// .envからプロジェクトIDを取得して定数に設定
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MESUREMENT_ID
}

// firebaseの初期化処理
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
