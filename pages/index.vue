<template>
  <v-main>
    <TheHeader />
    <TheBottomNavigationMenu />
  </v-main>
</template>

<script>
export default {
  components: {
    TheHeader: () => import("@/components/TheHeader"),
    TheBottomNavigationMenu: () =>
      import("@/components/TheBottomNavigationMenu"),
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
