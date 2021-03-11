<template>
  <div class="LoginForm">
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
        label="Contaseña"
        type="password"
        prepend-inner-icon="mdi-lock-outline"
      />
      <div class="forgot-password">¿Olvidaste la contraseña?</div>

      <v-btn block color="primary" rounded>Ingresar</v-btn>
    </v-form>
    <div class="separator-line" />

    <div class="login-with-text">O ingresa con</div>

    <div class="more-login-methods">
      <v-btn elevation="2" fab small> <v-icon>mdi-google</v-icon></v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
};
</script>

<style lang="scss" scoped>
.LoginForm {
  .forgot-password {
    font-size: 12px;
    color: $secondary;
    text-align: right;
    margin-bottom: 1rem;
  }
  .separator-line {
    height: 2px;
    background-color: #d9d9d9;
    width: calc(100% - 2rem);
    margin: 1.5rem 1rem;
  }
  .login-with-text {
    text-align: center;
    font-size: 14px;
    margin-bottom: 0.5rem;
  }
  .more-login-methods {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
}
</style>
