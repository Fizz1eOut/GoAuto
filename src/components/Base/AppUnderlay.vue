<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppUnderlay',

});
</script>

<template>
  <div class="underlay">
    <slot />
  </div>
</template>

<style scoped>
  .underlay {
    border-radius: 10px;
    background-color: #F5F7FA;
  }
</style>
