<template>
  <v-main>
    <TheHero />
    <TheFooter />
  </v-main>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  components: {
    TheHero: () => import("@/components/landing/TheHero"),
    TheFooter: () => import("@/components/landing/TheFooter"),
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
