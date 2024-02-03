<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppContainer',

  props: {
    size: {
      type: String,
      required: true,
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
<div :class="container">
    
  </div>
</template>

<style scoped>

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .size-xl {
    padding: 0 40px 0 95px;
  }
  @media (max-width: 991px) {
    .size-xl {
      padding: 0 10px 0 50px;
    }
  }
  @media (max-width: 499px) {
    .size-xl {
      padding: 30px 20px 0px 30px;
    }
  } 

  .size-lg {
    padding: 58px 50px;
  }
  @media (max-width: 768px) {
    .size-lg {
      padding: 50px 50px;
    }
  }
  @media (max-width: 499px) {
    .size-lg {
      padding: 30px 46px;
    }
  } 

  .size-md {
    padding: 30px 30px;
  }

  .size-sm {
    padding: 20px;
  }

  /* .size-xs {

  }
  @media (max-width: 768px) {

  }

  @media (max-width: 499px) {

  }  */

</style>
