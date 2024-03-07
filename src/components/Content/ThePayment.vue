<script>
import TheRadioWrapper from '@/components/Content/TheRadioWrapper.vue'
import AppRadio from '@/components/Inputs/AppRadio.vue';
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThePayment',

  components: {
    AppSubtitle,
    AppRadio,
    TheRadioWrapper,
  },

  data() {
    return {
      picked: 'Оплата при отриманні',
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
      <the-radio-wrapper>
        <app-radio v-model="picked" label="Оплата при отриманні" />
      </the-radio-wrapper>

      <the-radio-wrapper>
        <app-radio v-model="picked" label="Оплата на рахунок ФОП" />
      </the-radio-wrapper>
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
</style>