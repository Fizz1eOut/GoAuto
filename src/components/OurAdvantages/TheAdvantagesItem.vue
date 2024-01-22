<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheAdvantagesItem',
});
</script>

<template>
  <div class="advantages__item">
    <slot></slot>
  </div>
</template>

<style scoped>
.advantages__item {
  max-width: 330px;
}
@media (max-width: 768px) {
  .advantages__item {
  max-width: 100%;
}
}
</style>