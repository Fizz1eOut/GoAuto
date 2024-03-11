<script>
import AppRadio from '@/components/Inputs/AppRadio.vue';
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheDelivery',

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
  <div class="delivery">
    <app-subtitle>
      Доставка
    </app-subtitle>

    <div class="delivery__items">
      <div class="delivery__item">
        <app-radio v-model="picked" :value="1">
          Самовивіз за адресою м. Київ, вулиця Промислова 1
        </app-radio>
      </div>

      <div class="delivery__item">
        <app-radio v-model="picked" :value="2">
          Нова пошта
        </app-radio>
      </div>
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
  .delivery__item {
    border: 1px solid #abbed1;
    border-radius: 10px;
    padding: 20px;
  }
</style>
