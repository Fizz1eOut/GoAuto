<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppButton',

});
</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  padding: 16px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Manrope';
  color: var(--color-white);
  background-color: var(--color-blue);
  border-radius: 10px;
  border: 0.5px solid var(--color-white);
  transition: background-color 0.3s ease-in-out;
  
}
.button:hover {
  background-color: var(--color-blue-hover);
  cursor: pointer;
}
</style>