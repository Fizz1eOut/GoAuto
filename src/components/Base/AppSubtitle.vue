<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppSubtitle',


});
</script>

<template>
  <h2 class="subtitle">
    <slot></slot>
  </h2>
</template>

<style scoped>
.subtitle {
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: var(--color-black);
  }  
@media (max-width: 499.98px) {
  .subtitle {
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: var(--color-black);
  }  
}
</style>