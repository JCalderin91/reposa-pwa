<template>
  <v-main>
    <img src="@/assets/images/room-4.jpg" />
    <v-btn @click="toggleAuthDialog">Ingresar</v-btn>
  </v-main>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  components: {
    TheBottomNavigationMenu: () =>
      import("@/components/TheBottomNavigationMenu"),
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      toggleAuthDialog: "toggleAuthDialog",
    }),
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100vw;
}
</style>
