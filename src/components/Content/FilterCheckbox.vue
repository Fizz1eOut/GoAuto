<script>
import AppCheckbox from '@/components/Inputs/AppCheckbox.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterCheckbox',

  components: {
    AppCheckbox,
  },

  props: {
    options: {
      type: [String, Number, Array, Object, Boolean],
      required: true
    },
    modelValue: {
      type: [String, Number, Array, Object, Boolean],
      required: true
    }
  },

  emits: ['update:modelValue'],
  
  data() {
    return {
      
    }
  },

  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      }
    }
  },

  methods: {
    
  }
});
</script>

<template>
  <app-checkbox 
    v-model="selectedValue"
    :options="options"
  />
</template>

<style scoped>

</style>