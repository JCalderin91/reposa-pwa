<template>
  <div id="auth-dialog" :class="{ active: isAuthDialog }">
    <div class="background" @click="toggleAuthDialog" />
    <div class="form-wrapper">
      <div class="title-text">Bienvenido</div>
      <div class="selector mt-2 mb-6">
        <FormSwitch v-model="isLogin" />
      </div>
      <LoginForm v-if="isLogin" />
      <RegisterForm v-else />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
export default {
  components: {
    FormSwitch: () => import("@/components/FormSwitch"),
    LoginForm,
    RegisterForm,
  },
  data: () => ({
    isLogin: true,
  }),
  computed: {
    ...mapState({
      isAuthDialog: ({ isAuthDialog }) => isAuthDialog,
    }),
  },
  methods: {
    ...mapMutations({
      toggleAuthDialog: "toggleAuthDialog",
    }),
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
  opacity: 0;
  z-index: -100;
  transition: all 0.3s ease-in-out;
  .background {
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(0px);
    width: 100%;
    height: 100%;
  }
  .form-wrapper {
    background-color: $white;
    position: absolute;
    left: 0;
    bottom: -100vh;
    width: 100vw;
    padding: 2rem 2rem 0.5rem 2rem;
    border-radius: 40px 40px 0 0;
    transition: all 0.3s cubic-bezier(0.21, 0.43, 0.56, 1.08);
    .title-text {
      text-align: center;
      font-size: 30px;
    }
  }
  &.active {
    opacity: 1;
    z-index: 100;
    .background {
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
    }
    .form-wrapper {
      bottom: 0; // top: 0;
    }
  }
}
</style>
