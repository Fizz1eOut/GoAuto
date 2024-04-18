<script>
import AppSelect from '@/components/Inputs/AppSelect.vue';
import FilterQuery from '@/components/Content/FilterQuery.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterSelect',

  components: {
    AppSelect,
    FilterQuery,
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
  <div class="filter__select">
    <filter-query>
      <app-select 
        v-model="selectedValue"
        :options="options"
      />
    </filter-query>
  </div>
</template>

<style scoped>
  .filter__select:not(:last-child) {
    margin-bottom: 10px;
  }
</style>