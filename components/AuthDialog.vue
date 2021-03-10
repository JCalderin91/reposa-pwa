<template>
  <div id="auth-dialog">
    <div class="auth-dialog-form">
      <div class="title-text">Bienvenido</div>
      <div class="selector mt-4 mb-10">
        <FormSwitch />
      </div>
      <v-form @submit.prevent class="form">
        <v-text-field
          outlined
          dense
          label="Correo electrónico"
          prepend-inner-icon="mdi-account-outline"
        />
        <v-text-field
          outlined
          dense
          label="Correo electrónico"
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
  </div>
</template>

<script>
export default {
  components: {
    FormSwitch: () => import("@/components/FormSwitch"),
  },
};
</script>

<style lang="scss" scoped>
#auth-dialog {
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.5);
  .auth-dialog-form {
    background-color: $white;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    padding: 2.5rem 2rem 2rem 2rem;
    border-radius: 40px 40px 0 0;
    .title-text {
      text-align: center;
      font-size: 30px;
    }
    .form {
      .forgot-password {
        font-size: 12px;
        color: $secondary;
        text-align: right;
        margin-bottom: 1rem;
      }
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
}
</style>
