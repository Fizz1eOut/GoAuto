<script>
import { defineComponent } from 'vue';
import IconCar from '@/components/icons/IconCar.vue';
import AppTitle from '@/components/Base/AppTitle.vue';

export default defineComponent({
  name: 'ProcessedView',

  components: {
    IconCar,
    AppTitle
},

});
</script>

<template>
  <div class="order-processed">
    <div class="order-precessed__body">
      <icon-car class="icon" />
      <app-title>
        Дякуємо за замовлення!
      </app-title>
      <p class="order-processed__text">Ваше замовлення 5538 оформлено.<br>Менеджер незабаром зв'яжеться з вами.</p>
    </div>
  </div>
</template>

<style scoped>
  .icon {
    width: 264px;
    height: 103px;
  }
  .order-processed {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .order-precessed__body> *:not(:last-child) {
    margin-bottom: 10px;
  }
  .order-processed__text {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: var(--color-black);
  }
  @media (max-width: 499px) {

  }
</style>
