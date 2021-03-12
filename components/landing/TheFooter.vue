<template>
  <div id="TheFooter">
    <v-container> </v-container>
    <div class="copyright">Posada Las Marites &copy; 2021</div>
  </div>
</template>
<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
#TheFooter {
  background-color: $primary;
  border-radius: 40px 40px 0 0;
  margin-top: 2rem;
  .copyright {
    text-align: center;
    font-size: 12px;
    color: $white;
    opacity: 0.8;
  }
}
</style>
