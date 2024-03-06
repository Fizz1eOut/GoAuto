<script>
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import AppInput from '@/components/Inputs/AppInput.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheBuyerDetails',

  components: {
    AppInput,
    AppSubtitle,
  }
});
</script>

<template>
  <div class="buyer-details">
    <app-subtitle class="buyer-details__subtitle">
      Покупець
    </app-subtitle>

    <div class="buyer-details__items">
      <div class="buyer-details__item">
        <app-input placeholder="Імʼя та прізвище" />
      </div>

      <div class="buyer-details__item">
        <app-input placeholder="Номер телефону" />
      </div>

      <div class="buyer-details__item">
        <app-input placeholder="Електронна пошта" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .buyer-details__subtitle {
    padding-top: 30px;
  }
  .buyer-details__items {
    margin-top: 40px;
  }
  .buyer-details__items> *:not(:last-child) {
    margin-bottom: 30px;
  }
</style>
