<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheOurAdvantagesTitle',

  components: {
    
  }
});
</script>

<template>
  <h3 class="advantages__title">
    <slot></slot>
  </h3>
</template>

<style scoped>
.advantages__title {
  margin-top: 30px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: var(--color-black);
}
</style>