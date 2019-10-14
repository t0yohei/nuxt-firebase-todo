<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="#5963F8" dark class="font-weight-bold" v-on="on"
        ><v-icon small class="mr-2">mdi-plus-circle-outline </v-icon
        >新規タスクを追加</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">新規タスクを追加</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="title" label="Title"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="detail" label="Detail"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="日時"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <div class="flex-grow-1"></div>
                  <v-btn text color="primary" @click="modal = false"
                    >Cancel</v-btn
                  >
                  <v-btn text color="primary" @click="$refs.dialog.save(date)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="primary" text @click="dialog = false">キャンセル</v-btn>
        <v-btn color="primary" text @click="add">登録</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      detail: '',
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false
    }
  },
  methods: {
    add() {
      this.$store.dispatch('task/add', {
        title: this.title,
        detail: this.detail,
        date: this.date
      })
      this.dialog = false
    }
  }
}
</script>
