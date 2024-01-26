<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppDivider',
});
</script>

<template>
  <div class="divider">
  </div>
</template>

<style scoped>
.divider {
  width: 1px;
  height: 171px;
  background-color: #ABBED1;
}
@media (max-width: 1024px) {
  .divider {
    display: none;
  }
}
@media (max-width: 768px) {
  .divider {
    display: block;
    width: 100%;
    height: 1px;
  }
}
</style>