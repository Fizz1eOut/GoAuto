<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTableListItem',

  components: {
  
  }
});
</script>

<template>
  <td class="table-text">
    <slot />
  </td>
</template>

<style scoped>
  .table-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: var(--color-black);
  }
</style>