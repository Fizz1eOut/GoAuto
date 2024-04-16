<script>
import AppSelect from '@/components/Inputs/AppSelect.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterSelect',

  components: {
    AppSelect,
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

  // data() {
  //   return {
      
  //   }
  // },

  // methods: {
    
  // }
});
</script>

<template>
  <app-select 
    v-model="selectedValue"
    :options="options"
  />
</template>

<style scoped>

</style>