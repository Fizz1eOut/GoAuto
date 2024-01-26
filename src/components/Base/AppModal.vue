<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppModal',

  props: {
    modal: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  
  data() {
    return {
     active: false, 
    }
  },
});
</script>

<template>
    <div v-if="modal" class="modal">
      <div class="overlay">
        <slot></slot>
      </div>
  </div>
</template>

<style scoped>
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    transition: all 0.3s ease-in-out;
  }
</style>