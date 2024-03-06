<script>
import AppInput from '@/components/Inputs/AppInput.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheBuyerDetails',

  components: {
    AppInput,
  }
});
</script>

<template>
  <div class="buyer-details">
    <h3 class="buyer-details__title">Покупець</h3>

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
  .buyer-details__title {
    padding-top: 30px;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: var(--color-black);
  }
  .buyer-details__items {
    margin-top: 40px;
  }
  .buyer-details__items> *:not(:last-child) {
    margin-bottom: 30px;
  }
</style>
