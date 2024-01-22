<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheOurAdvantagesText',

  components: {
    
  }
});
</script>

<template>
  <h3 class="advantages__text">
    <slot></slot>
  </h3>
</template>

<style scoped>
.advantages__text {
  margin-top: 12px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: var(--color-grey);
}
</style>