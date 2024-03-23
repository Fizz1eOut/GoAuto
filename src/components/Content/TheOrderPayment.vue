<script>
import AppButton from '@/components/Base/AppButton.vue'
import ThePayment from '@/components/Content/ThePayment.vue'
import TheDelivery from '@/components/Content/TheDelivery.vue'
import TheBuyerDetails from '@/components/Content/TheBuyerDetails.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheOrderPayment',

  components: {
    TheBuyerDetails,
    TheDelivery,
    ThePayment,
    AppButton,
  },

  // data() {
  //   return {
      
  //   };
  // },
  // mounted() {

  // },
  // methods: {
  // }
});
</script>

<template>
  <form class="order-payment">
    <the-buyer-details />
    <the-delivery />
    <the-payment />
    <div class="order-payment__row">
      <app-button>Замовлення підтверджую</app-button>
    </div>
  </form>
</template>

<style scoped>
  .order-payment__row {
    max-width: 250px;
    margin-top: 30px;
  }
  .order-payment__title {
    padding-bottom: 40px;
  }
</style>


