<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServiceTerms',

  components: {

  }
});
</script>

<template>
  <li class="service-terms__item">
    <span><slot name="subtitle"></slot></span>
    
    <p class="service-terms__text">
      <slot name="text"></slot>
    </p>
  </li>
</template>

<style scoped>
  .service-terms__item {
    list-style: inside;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    color: var(--color-black);
  }
  .service-terms__item:not(:last-child) {
    margin-bottom: 20px;
  }
  .service-terms__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
  }
</style>