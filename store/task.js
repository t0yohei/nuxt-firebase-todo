import _ from 'lodash'
import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const taskRef = db.collection('task')

export const state = () => ({
  tasks: []
})

export const actions = {
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('tasks', taskRef)
  }),
  // 追加
  add: firestoreAction((context, { title, detail, date }) => {
    if (title.trim()) {
      taskRef.add({
        title,
        detail,
        date,
        status: false
      })
    }
  }),
  // 削除
  remove: firestoreAction((context, id) => {
    taskRef.doc(id).delete()
  }),
  // ステータス更新
  toggle: firestoreAction((context, todo) => {
    taskRef.doc(todo.id).update({
      status: !todo.status
    })
  })
}

// 日付の昇順でソート
export const getters = {
  orderdTodos: (state) => {
    return _.orderBy(state.tasks, 'date', 'asc')
  }
}
