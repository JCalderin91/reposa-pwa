<template>
  <v-app id="app">
    <nuxt />
  </v-app>
</template>

<script>
export default {
  components: {
    TheNavbar: () => import("./components/TheNavbar"),
    TheFooter: () => import("./components/TheFooter"),
  },
};
</script>
<style scoped>
#app {
  min-height: 100vh;
  background-color: #fcfdfd;
}
</style>
