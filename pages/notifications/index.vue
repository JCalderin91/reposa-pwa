<template>
  <div>
    <NotificationCard />
  </div>
</template>

<script>
export default {
  components: {
    NotificationCard: () => import("@/components/NotificationCard"),
  },
};
</script>

<style lang="scss" scoped>
</style>
