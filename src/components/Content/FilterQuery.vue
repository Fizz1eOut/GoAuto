<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterQuery',

  components: {
    
  },

  props: {
    name: {
      type: String,
      required: true
    },
    query: {
      type: Object,
      required: true
    }
  },

  emits: ['update:model'],

  data() {
    return {

    }
  },


  computed: {
    model: {
      get() {
        return this.query[this.name];
      },
      set(value) {
        this.$emit('update:model', value);
      }
    }
  },

  // methods: {
    
  // }
});
</script>

<template>
  <div class="filter__query">
    <slot :model="model" />
  </div>
</template>

<style scoped>

</style>
