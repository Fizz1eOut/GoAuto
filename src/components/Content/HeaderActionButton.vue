<script>
import { defineComponent } from 'vue';
import CallbackModal from '@/components/Content/CallbackModal.vue';

export default defineComponent({
  name: 'HeaderActionButton',

  components: {
    CallbackModal,
  },

  data() {
    return {
     active: false,
    }
  },
});
</script>

<template>
  <button @click="active = true" class="button">
    Замовити консультацію
  </button>

  <callback-modal v-model="active" @update:model-value="active = $event" />
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