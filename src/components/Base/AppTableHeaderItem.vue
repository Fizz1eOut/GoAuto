<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTableHeaderItem',

  components: {
  
  }
});
</script>

<template>
  <th class="table-header__title">
    <slot />
  </th>
</template>

<style scoped>
  .table-header__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    color: var(--color-black);
  }
</style>