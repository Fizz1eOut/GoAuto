<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CartView',

  components: {

  },

  // data() {
  //   return {
      
  //   }
  // },

  // methods: {
    
  // }
});
</script>

<template>
  <div class="counter">
    <div class="counter__control counter__minus">-</div>
    <div class="counter__count">1</div>
    <div class="counter__control counter__plus">+</div>
  </div>
</template>

<style scoped>
  .counter {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .counter__control {
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    color: var(--color-grey);
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-grey);
    border-radius: 50%;
    transition: border 0.3s ease-in-out, color 0.3s ease-in-out;
  }
  .counter__control:hover {
    color: var(--color-blue-hover);
    border: 1px solid var(--color-blue-hover);
    cursor: pointer;
  }
  .counter__count {
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    color: var(--color-black);
  }
</style>
