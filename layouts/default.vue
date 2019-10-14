<template>
  <v-app dark>
    <v-app-bar color="#5963F8" fixed app dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'TodoList'
    }
  }
}
</script>

<style>
.theme--light.v-application {
  background: #ffffff;
}
.v-toolbar__title {
  font-family: 'Damion', cursive;
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
}
</style>
