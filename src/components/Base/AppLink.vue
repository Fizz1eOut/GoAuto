<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLink',
});
</script>

<template>
  <a href="#" class="link line">
    <slot></slot>
  </a>
</template>

<style scoped>
.link {
  color: var(--color-black);
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  transition: color 0.3s ease-in-out, fill 0.3s ease-in-out;
}
.link:hover {
  color: var(--color-blue-hover);
}

</style>