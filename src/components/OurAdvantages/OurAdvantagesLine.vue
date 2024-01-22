<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheAdvantagesLine',
});
</script>

<template>
  <div class="advantages__line">
  </div>
</template>

<style scoped>
.advantages__line {
  width: 1px;
  height: 171px;
  background-color: #ABBED1;
}
@media (max-width: 1024px) {
  .advantages__line {
    display: none;
  }
}
@media (max-width: 768px) {
  .advantages__line {
    display: block;
    width: 100%;
    height: 1px;
  }
}
</style>