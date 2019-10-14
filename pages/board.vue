<template>
  <v-container class="todo">
    <v-form ref="form">
      <v-row>
        <v-col cols="12" md="12">
          <task-detail></task-detail>
        </v-col>
      </v-row>
    </v-form>
    <task-list title="Todo" :tasklist="todolist"></task-list>
    <task-list title="Done" :tasklist="donelist"></task-list>
  </v-container>
</template>

<script>
import TaskList from '../components/TaskList.vue'
import TaskDetail from '../components/TaskDetail.vue'

export default {
  components: {
    TaskList,
    TaskDetail
  },
  computed: {
    todolist() {
      return this.$store.getters['task/orderdTodos'].filter(function(el) {
        return el.status === false
      }, this)
    },
    donelist() {
      return this.$store.getters['task/orderdTodos'].filter(function(el) {
        return el.status === true
      }, this)
    }
  },
  created() {
    this.$store.dispatch('task/init')
  }
}
</script>

<style scoped>
.status.done {
  text-decoration: line-through;
}
</style>
