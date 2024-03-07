<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheRadioWrapper',

  components: {
    AppContainer,
  }
});
</script>

<template>
  <li class="radio-wrapper" size="sm">
    <app-container>
      <slot />
    </app-container>
  </li>
</template>

<style scoped>
  .radio-wrapper {
    border: 1px solid #abbed1;
    border-radius: 10px;
  }
</style>  