<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'ModalHeader',

});
</script>

<template>
  <button class="close">
    <slot></slot>
  </button>
</template>

<style scoped>
.close {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background-color: transparent;
}
</style>