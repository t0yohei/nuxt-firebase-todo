import _ from 'lodash'
import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const taskRef = db.collection('task')

export const state = () => ({
  tasks: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('tasks', taskRef)
  }),
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
  remove: firestoreAction((context, id) => {
    taskRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, todo) => {
    taskRef.doc(todo.id).update({
      status: !todo.status
    })
  })
}

export const getters = {
  orderdTodos: (state) => {
    return _.orderBy(state.tasks, 'date', 'asc')
  }
}
