<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackCall',

  data() {
    return {
      
    }
  },
  methods: {

  }
});
</script>

<template>
  <button class="button">
    Замовити консультацію
  </button>
</template>

<style scoped>
.button {
  font-family: 'Manrope';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  text-decoration-line: underline;
  color: var(--color-blue);
  cursor: pointer;
  background-color: transparent;
}
.button:hover {
  text-decoration-line: none;
}
</style>  