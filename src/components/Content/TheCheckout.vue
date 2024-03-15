<script>
import TheOrderPayment from "@/components/Content/TheOrderPayment.vue";
import AppDivider from "@/components/Base/AppDivider.vue";
import AppTitle from '@/components/Base/AppTitle.vue';
import { defineComponent } from 'vue';
import CartOrder from "@/components/Content/CartOrder.vue";

export default defineComponent({
  name: 'TheCheckout',

  components: {
    AppTitle,
    AppDivider,
    TheOrderPayment,
    CartOrder,
  }
});
</script>

<template>
  <div class="placing-order">
    <app-title class="placing-order__title">
      Оформлення замовлення
    </app-title>
    <app-divider class="divider" />

    <div class="placing-order__body">
      <div class="placing-order__placing">
        <the-order-payment />
      </div>
      
      <div class="placing-order__order">
        <cart-order />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .placing-order {
    margin-top: 15px;
  }
  .placing-order__title {
    padding-bottom: 40px;
  }
  .placing-order__body {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }
  .placing-order__placing {
    max-width: 55%;
    width: 100%;
  }
  .placing-order__order {
    width: 100%;
    max-width: 40%;
  }
  @media (max-width: 991px) {
    .placing-order__order {
      width: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    .placing-order__body {
      flex-direction: column;
    }
    .placing-order__placing {
    max-width: 100%;
    width: 100%;
  }
  }
</style>
