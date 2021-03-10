<template>
  <v-app id="app">
    <nuxt />
    <AuthDialog />
  </v-app>
</template>

<script>
export default {
  components: {
    AuthDialog: () => import("@/components/AuthDialog"),
  },
};
</script>
<style scoped>
#app {
  min-height: 100vh;
  background-color: #fcfdfd;
}
</style>
