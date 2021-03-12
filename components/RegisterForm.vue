<template>
  <div class="RegisterForm">
    <v-form @submit.prevent>
      <v-text-field
        outlined
        dense
        label="Correo electrónico"
        prepend-inner-icon="mdi-account-outline"
      />
      <v-text-field
        outlined
        dense
        label="Contraseña"
        type="password"
        prepend-inner-icon="mdi-lock-outline"
      />
      <v-text-field
        outlined
        dense
        label="Confirmar contraseña"
        type="password"
        prepend-inner-icon="mdi-lock-outline"
      />

      <v-btn block color="primary" rounded>Registrase</v-btn>
    </v-form>
    <div class="separator-line" />

    <div class="register-with-text">O registrate con</div>

    <div class="more-register-methods">
      <v-btn elevation="2" fab small>
        <img src="@/assets/svgs/google.svg" height="28" width="28" alt="" />
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegisterForm",
};
</script>

<style lang="scss" scoped>
.RegisterForm {
  .separator-line {
    height: 2px;
    background-color: #d9d9d9;
    width: calc(100% - 2rem);
    margin: 0.8rem 1rem 0.5rem 1rem;
  }
  .register-with-text {
    text-align: center;
    font-size: 14px;
    margin-bottom: 0.3rem;
  }
  .more-register-methods {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
}
</style>
