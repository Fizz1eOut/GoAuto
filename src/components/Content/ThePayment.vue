<script>
import AppRadio from '@/components/Inputs/AppRadio.vue';
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThePayment',

  components: {
    AppSubtitle,
    AppRadio,
  },

  data() {
    return {
      picked: 1,
    };
  },
});
</script>

<template>
  <div class="payment">
    <app-subtitle>
      Оплата
    </app-subtitle>

    <div class="payment__items">
      <div class="delivery__item">
        <app-radio v-model="picked" :value="1">
          Оплата при отриманні
        </app-radio>
      </div>

      <div class="delivery__item">
        <app-radio v-model="picked" :value="2">
          Оплата на рахунок ФОП
        </app-radio>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .payment {
    margin-top: 50px;
  }
  .payment__items {
    margin-top: 30px;
  }
  .payment__items> *:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (max-width: 499px) {
    .payment {
      margin-top: 30px;
    }
    .payment__items {
      margin-top: 20px;
    }
  }
  .delivery__item {
    border: 1px solid #abbed1;
    border-radius: 10px;
    padding: 20px;
  }
</style>