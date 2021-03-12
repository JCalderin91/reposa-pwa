<template>
  <div class="NotificationCard unread">
    <div class="header">
      Pedido listo
      <div class="badge"></div>
    </div>
    <div class="line"></div>
    <div class="details">
      Su pedido de Almuerzo especial esta listo para ser retirado.
    </div>
    <div class="date">11/03/21 8:14 P.M.</div>
  </div>
</template>
<script>
export default {
  name: "NotificationCard",
};
</script>

<style lang="scss" scoped>
$gray: #c2c2c2;
.NotificationCard {
  background-color: $white;
  margin: 0.5rem;
  border-radius: 0.5rem;
  border-left: 0.8rem solid $gray;
  padding: 0.5rem 0.8rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  .header {
    display: flex;
    justify-content: space-between;
    .badge {
      height: 18px;
      width: 18px;
      border-radius: 50%;
      background-color: $gray;
      box-shadow: 0 0 10px $gray;
    }
  }
  .line {
    height: 1px;
    background-color: rgba(128, 128, 128, 0.521);
    margin: 0.5rem;
  }
  .details {
    font-size: 12px;
  }
  .date {
    font-size: 10px;
    text-align: right;
    color: $secondary;
  }
  &.unread {
    border-left: 0.8rem solid $secondary;
    .header {
      .badge {
        background-color: $secondary;
        box-shadow: 0 0 10px $secondary;
      }
    }
  }
}
</style>
