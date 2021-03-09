<template>
  <div id="TheHeader" class="primary">
    <v-container>
      <ChevronLeftSvg />
      <h4 class="title-text"><BookSvg class="mr-2" /> Reservación</h4>
      <h4 class="subtitle-text"># 54856992</h4>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  components: {
    ChevronLeftSvg: () => import("@/components/svgs/ChevronLeftSvg"),
    BookSvg: () => import("@/components/svgs/BookSvg"),
  },
};
</script>

<style lang="scss" scoped>
#TheHeader {
  color: white !important;
  border-radius: 0 0 40px 40px;
  padding: 10px;
  .title-text {
    margin-top: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .subtitle-text {
    font-size: 16px;
    text-align: right;
  }
}
</style>
