<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'linkNumber',
});
</script>

<template>
  <div>
    <a href="tel:0980808308" class="link__number">(098) 080-83-08</a>
    <slot></slot>
  </div>
</template>

<style scoped>
.link__number {
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: var(--color-black);
}
</style>