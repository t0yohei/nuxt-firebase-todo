<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-list color="#f4f5fc">
        <v-subheader class="font-weight-bold">{{ title }}</v-subheader>
        <v-col v-for="task in tasklist" :key="task.id" cols="12" class="pt-0">
          <v-card>
            <v-card-title class="headline pb-0">
              <v-checkbox
                :checked="task.status"
                color="primary"
                class="ma-0"
                :label="task.title"
                @change="toggle(task)"
              ></v-checkbox>
            </v-card-title>
            <v-card-text class="pb-0">{{ task.detail }}</v-card-text>
            <v-card-actions class="pt-0">
              <v-col cols="10" md="10" class="pl-0">
                <v-btn text>
                  <v-chip color="grey lighten-3" label>
                    <v-avatar left>
                      <v-icon small color="primary">mdi-calendar</v-icon>
                    </v-avatar>
                    {{ task.date }}
                  </v-chip></v-btn
                >
              </v-col>
              <v-col cols="2" md="2">
                <v-btn icon color="grey" text dark @click="remove(task.id)">
                  <v-icon>mdi-close-circle-outline</v-icon>
                </v-btn>
              </v-col>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    tasklist: {
      type: Array,
      default: null
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('task/remove', id)
    },
    toggle(task) {
      this.$store.dispatch('task/toggle', task)
    }
  }
}
</script>

<style>
.theme--light.v-label {
  color: #000;
}
.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
  margin-bottom: 0px;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 0;
}
</style>
