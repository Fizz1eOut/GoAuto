<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppBurger',

  props: {
    active: {
      type: Boolean,
      required: true
    }
  },

  emits: ['change'],

  data() {
    return {
      dropdownActive: false,
    }
  },

  watch: {
    active(value) {
      document.body.style.overflow = value ? 'hidden' : '';
    }
  },

  methods: {
    toggle() {
      this.dropdownActive = !this.dropdownActive;
    },
    toggleBurger() {
      this.$emit('change', !this.active);
    }
  }
});
</script>

<template>
  <button 
    @click="toggleBurger"
    :class="{ 'burger--active': active }"
    class="burger"
  >
    <span class="burger__line"></span>
  </button>
</template>

<style scoped>
  .burger {
    width: 32px;
    height: 23px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: relative;
    z-index: 11;
    display: none;
}
@media (max-width: 991px) {
  .burger {
    display: block;
  }
  .burger::before,
  .burger::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-blue);
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out, bottom 0.3s ease-in-out;
  }
  
  .burger::after {
    top: auto;
    bottom: 0;
  }
  
  .burger span {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    display: inline-block;
    background-color: var(--color-blue);
  }
  
  .burger--active .burger__line {
    opacity: 0;
  }
  
  .burger--active::before {
    top: 50%;
    transform: rotate(45deg);
  }
  
  .burger--active::after {
    bottom: auto;
    top: 50%;
    transform: rotate(-45deg);
  }
}

</style>