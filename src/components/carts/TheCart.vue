<script>
import { defineComponent } from 'vue';
import IconCart from '../icons/IconCart.vue';
export default defineComponent({
  name: 'TheCart',
  components: {
    IconCart,
  },
});
</script>

<template>
  <button class="cart">
    <icon-cart />
  </button>
</template>

<style scoped>
.cart {
  width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(137, 147, 158, 0.60);
  background-color: transparent;
  cursor: pointer;
}
</style>