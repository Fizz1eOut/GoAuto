<script>
import AppTitle from '@/components/Base/AppTitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OurWorks',

  components: {
    AppTitle
  }
});
</script>

<template>
  <div class="our-works">
    <AppTitle>
      Наші роботи
    </AppTitle>
    <div class="our-works__body">
      <div class="our-works__image">
        <img src="../../assets/images/our-products/1.svg" alt="Зображення">
      </div>

      <div class="our-works__image">
        <img src="../../assets/images/our-products/2.svg" alt="Зображення">
      </div>

      <div class="our-works__image">
        <img src="../../assets/images/our-products/3.svg" alt="Зображення">
      </div>

      <div class="our-works__image">
        <img src="../../assets/images/our-products/4.svg" alt="Зображення">
      </div>

      <div class="our-works__image">
        <img src="../../assets/images/our-products/5.svg" alt="Зображення">
      </div>

      <div class="our-works__image">
        <img src="../../assets/images/our-products/6.svg" alt="Зображення">
      </div>

      <div class="our-works__image">
        <img src="../../assets/images/our-products/7.svg" alt="Зображення">
      </div>

      <div class="our-works__image">
        <img src="../../assets/images/our-products/8.svg" alt="Зображення">
      </div>

      <div class="our-works__image">
        <img src="../../assets/images/our-products/9.svg" alt="Зображення">
      </div>

      <div class="our-works__image">
        <img src="../../assets/images/our-products/10.svg" alt="Зображення">
      </div>

      <div class="our-works__image">
        <img src="../../assets/images/our-products/11.svg" alt="Зображення">
      </div>

      <div class="our-works__image">
        <img src="../../assets/images/our-products/12.svg" alt="Зображення">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .our-works {
    margin-top: 20px;
  }
  .our-works__body {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 6px;
    row-gap: 20px;
  }
  .our-works__image img {
    max-width: 100%;
  }
  @media (max-width: 499px) {
    .our-works__body {
      margin-top: 20px;
    }
  }
</style>