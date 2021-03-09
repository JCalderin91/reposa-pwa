
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28.184"
    height="21.138"
    viewBox="0 0 28.184 21.138"
  >
    <path
      id="concierge-bell"
      d="M15.854,67.663V66.642h.881a.881.881,0,0,0,.881-.881v-.881A.881.881,0,0,0,16.734,64H11.45a.881.881,0,0,0-.881.881v.881a.881.881,0,0,0,.881.881h.881v1.021A12.323,12.323,0,0,0,1.762,79.854H26.423A12.323,12.323,0,0,0,15.854,67.663ZM27.3,81.615H.881A.881.881,0,0,0,0,82.5v1.762a.881.881,0,0,0,.881.881H27.3a.881.881,0,0,0,.881-.881V82.5A.881.881,0,0,0,27.3,81.615Z"
      transform="translate(0 -64)"
      fill="#fff"
    />
  </svg>
</template>

<script>
export default {
  name: "ReceptionSvg",
  props: {
    fill: {
      type: String,
      default: "gray",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
