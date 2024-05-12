<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppContainer',

  props: {
    size: {
      type: String,
      default: 'xs',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    }
  },
  computed: {
    container() {
      return `size-${this.size}`;
    }
  }
});
</script>

<template>
  <div :class="container" class="container">
    <slot />
  </div>
</template>

<style scoped>
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .size-xl {
    padding: 50px;
  }

  .size-lg {
    padding: 40px;
  }
 

  .size-md {
    padding: 30px;
  }

  .size-sm {
    padding: 20px;
  }

  .size-xs {
    padding: 16px;
  }
  @media (max-width: 768px) {

  }

  @media (max-width: 499px) {
    .size-md {
      padding: 16px;
    }
    .size-xl {
      padding: 20px;
    }
  } 

</style>
