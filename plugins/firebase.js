import firebase from 'firebase/app'
import 'firebase/firestore'

// .envからプロジェクトIDを取得して定数に設定
const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

// firebaseの初期化処理
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
