<template>
  <div id="FormSwitch" :class="{ active: value }">
    <div @click="$emit('input', true)" class="opt login-opt">Ingresar</div>
    <div @click="$emit('input', false)" class="opt register-opt">
      Registrase
    </div>
  </div>
</template>

<script>
export default {
  name: "FormSwitch",
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#FormSwitch {
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.6rem;
  border-radius: 1.3rem;
  position: relative;
  max-width: 300px;
  min-width: 250px;
  margin: 0 auto;
  &::before {
    content: "";
    position: absolute;
    left: calc(50% + 0.5rem);
    right: 0.5rem;
    top: 0.5rem;
    height: calc(100% - 1rem);
    background: $secondary;
    width: calc(50% - 1rem);
    border-radius: 0.9rem;
    z-index: 0;
    transition: all 0.3s ease-in-out;
  }
  .opt {
    padding: 0.5rem 1rem;
    border-radius: 0.9rem;
    width: calc(50% - 0.5rem);
    z-index: 1;
    transition: all 0.3s ease-in-out;
    text-align: center;
    &.register-opt {
      color: $white;
      cursor: default;
    }
    &.login-opt {
      cursor: pointer;
    }
  }
  &.active {
    &::before {
      right: 50%;
      left: 0.5rem;
    }
    .opt {
      &.login-opt {
        color: $white;
        cursor: default;
      }
      &.register-opt {
        color: $black;
        cursor: pointer;
      }
    }
  }
}
</style>
