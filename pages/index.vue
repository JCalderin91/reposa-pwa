<template>
  <v-main>
    <img src="@/assets/images/room-4.jpg" />
  </v-main>
</template>

<script>
export default {
  components: {
    TheBottomNavigationMenu: () =>
      import("@/components/TheBottomNavigationMenu"),
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100vw;
}
</style>
