<script>
import { defineComponent } from 'vue';
import AppTitle from '../AppTitle.vue';

export default defineComponent({
  name: 'TheProductSelection',

  components: {
    AppTitle,
  }
});
</script>

<template>
  <div class="product-selection">
    <div class="product-selection__container container">
      <app-title>Шини</app-title>
    </div>
  </div>
</template>

<style scoped>

</style>