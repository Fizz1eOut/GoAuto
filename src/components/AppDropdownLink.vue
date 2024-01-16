<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppDropdownLink',

  data() {
    return {
      
    }
  },
  methods: {

  }
});
</script>

<template>
  <a href="#" class="link line">
    <slot></slot>
  </a>
</template>

<style scoped>
.link {
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-black);
  cursor: pointer;
  background-color: transparent;
}

.link:hover{
  color: var(--color-blue-hover);
}
</style>  