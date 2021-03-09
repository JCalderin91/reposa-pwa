<template>
  <v-app-bar
    dense
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    app
    color="primary"
    dark
  >
    <v-app-bar-nav-icon @click.stop="$emit('menu')"></v-app-bar-nav-icon>

    <v-toolbar-title>
      <h1 class="title secondary--text">
        <!-- <img
          src="@/assets/favicon.png"
          alt="Logo"
          style="margin-bottom: -3px"
          height="25"
          class="mr-2"
          srcset=""
        /> -->
        Base project
      </h1>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <div class="user-info-container mr-2">
      <div class="user-name">username</div>
      <div class="user-rol">role</div>
    </div>
    <v-avatar color="secondary" size="40"> un </v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheNabar",
};
</script>

<style lang="scss" scoped>
</style>
