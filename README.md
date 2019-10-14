# nuxt-firebase-todo

https://github.com/t0yohei/nuxt-firebase-todo/commit/256243c7ee8c231f1823c6fff325772e45ff542e までは下記の記事を参考にして作成。

[Nuxt.js - Firebaseを使ったToDoアプリの作成](https://qiita.com/so_heee_/items/200beb014c8a8ad100d1#ui%E3%81%AE%E8%AA%BF%E6%95%B4) 

## 環境構築メモ
### nuxt setup

```bash
$ yarn create nuxt-app nuxt-firebase-todo
✨  Generating Nuxt.js project in nuxt-firebase-todo
? Project name nuxt-firebase-todo
? Project description My priceless Nuxt.js project
? Author name t0yohei
? Choose the package manager Yarn
? Choose UI framework Vuetify.js
? Choose custom server framework None (Recommended)
? Choose Nuxt.js modules (Press <space> to select, <a> to toggle all, <i>
to invert selection)
? Choose linting tools ESLint, Prettier
? Choose test framework None
? Choose rendering mode Single Page App
? Choose development tools jsconfig.json (Recommended for VS Code)
```

### firebase

```bash
$ yarn add --dev firebase
$ yarn add --dev vuexfire
```

### dotenv

```bash
$ yarn add --dev @nuxtjs/dotenv
```

#### .env

```.env
FIREBASE_API_KEY=''
FIREBASE_AUTH_DOMAIN=''
FIREBASE_DATABASE_URL=''
FIREBASE_PROJECT_ID=''
FIREBASE_STORAGE_BUCKET=''
FIREBASE_MESSAGING_SENDER_ID=''
FIREBASE_APP_ID=''
FIREBASE_MESUREMENT_ID=''
```

#### nuxt.config.js

```nuxt.config.js
  modules: [
    '@nuxtjs/dotenv',
  ]
```

### firebase 初期化

#### plugins/firebase.js

```plugins/firebase.js
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
```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
