<script>
import TheRadioWrapper from '@/components/Content/TheRadioWrapper.vue'
import AppRadio from '@/components/Inputs/AppRadio.vue';
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheDelivery',

  components: {
    AppSubtitle,
    AppRadio,
    TheRadioWrapper,
  },

  data() {
    return {
      picked: 'Самовивіз за адресою м. Київ, вулиця Промислова 1',
    };
  },
});
</script>

<template>
  <div class="delivery">
    <app-subtitle>
      Доставка
    </app-subtitle>

    <div class="delivery__items">
      <the-radio-wrapper>
        <app-radio v-model="picked" label="Самовивіз за адресою м. Київ, вулиця Промислова 1" />
      </the-radio-wrapper>

      <the-radio-wrapper>
        <app-radio v-model="picked" label="Нова пошта" />
      </the-radio-wrapper>
    </div>
  </div>
</template>

<style scoped>
  .delivery {
    margin-top: 50px;
  }
  .delivery__items {
    margin-top: 30px;
  }
  .delivery__items> *:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (max-width: 499px) {
    .delivery {
      margin-top: 30px;
    }
    .delivery__items {
      margin-top: 20px;
    }
  }
</style>
