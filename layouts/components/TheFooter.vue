<template>
  <footer class="the-footer">
    <div class="secondary--text text">Comenzemos</div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.the-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 74px;
  background-color: rgb(252, 252, 252);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -5px 15px rgb(0 0 0 / 10%);
  .text {
    font-weight: bold;
    font-size: 23px;
  }
}
</style>
