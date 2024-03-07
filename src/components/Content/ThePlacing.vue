<script>
import AppButton from '@/components/Base/AppButton.vue'
import ThePayment from '@/components/Content/ThePayment.vue'
import TheDelivery from '@/components/Content/TheDelivery.vue'
import TheBuyerDetails from '@/components/Content/TheBuyerDetails.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThePlacingOrder',

  components: {
    TheBuyerDetails,
    TheDelivery,
    ThePayment,
    AppButton,
  }
});
</script>

<template>
  <div class="placing">
    <the-buyer-details />
    <the-delivery />
    <the-payment />
    <div class="placing__row">
      <app-button>Замовлення підтверджую</app-button>
    </div>
  </div>
</template>

<style scoped>
  .placing__row {
    max-width: 250px;
    margin-top: 30px;
  }
  .placing__title {
    padding-bottom: 40px;
  }
  .divider {
  }
</style>


