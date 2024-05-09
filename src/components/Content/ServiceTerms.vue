<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServiceTerms',

  components: {

  }
});
</script>

<template>
  <div class="service-terms">
    <slot name="title"></slot>
    <ul class="service-terms__list">
      <slot />
    </ul>
  </div>
</template>

<style scoped>
  .service-terms {
    margin-top: 15px;
  }
  .service-terms__list {
    margin-top: 30px;
  }
</style>