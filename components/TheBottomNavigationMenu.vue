<template>
  <div id="TheBottomNavigationMenu">
    <template v-if="isAuth">
      <v-btn text fab>
        <HomeSvg fill="orange" />
      </v-btn>
      <v-btn text fab>
        <BellSvg />
      </v-btn>
      <v-btn fab color="primary" class="center-button">
        <ReceptionBellSvg fill="white" />
      </v-btn>
      <v-btn text fab>
        <BellSvg />
      </v-btn>
      <v-btn text fab>
        <BellSvg />
      </v-btn>
    </template>
    <template v-else>
      <div class="booking-btn">Reserva ahora</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "TheBottomNavigationMenu",
  components: {
    HomeSvg: () => import("@/components/svgs/HomeSvg"),
    BellSvg: () => import("@/components/svgs/BellSvg"),
    ReceptionBellSvg: () => import("@/components/svgs/ReceptionBellSvg"),
  },
  computed: {
    isAuth() {
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
#TheBottomNavigationMenu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background-color: $white;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -5px 15px rgb(0 0 0 / 10%);
  .center-button {
    top: -25px;
    border-radius: 50% !important;
  }
  // bookig-btn
  .booking-btn {
    color: $secondary;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 100%;
  }
}
</style>
