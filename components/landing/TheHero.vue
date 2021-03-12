<template>
  <div id="TheHero">
    <v-container class="hero-wrapper">
      <h1 class="hero-title">Posada</h1>
      <h2 class="hero-subtitle">Las Marites</h2>
      <p class="hero-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        velit. Voluptates dolorum, temporibus aliquam aliquid nulla blanditiis
        officiis.
      </p>
      <v-btn class="hero-cta" rounded color="secondary">Registrate aqui</v-btn>
      <img
        src="@/assets/svgs/Icon feather-chevrons-down.svg"
        alt=""
        class="arrow"
      />
    </v-container>
  </div>
</template>
<script>
export default {
  name: "TheHero",
};
</script>

<style lang="scss" scoped>
#TheHero {
  background-color: rgb(128, 128, 128);
  border-radius: 0 0 40px 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
  min-height: 99vh;
  .hero-wrapper {
    min-height: 99vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: $white;
    position: relative;
    .hero-title {
      font-size: 28px;
    }
    .hero-subtitle {
      font-size: 38px;
    }
    .hero-text {
      margin-top: 1.5rem;
      margin-bottom: 3rem;
    }
    .hero-cta {
      padding: 0 2.5rem;
    }
    .arrow {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0.5rem;
    }
  }
}
</style>
