<script>
import AppCheckbox from '@/components/Inputs/AppCheckbox.vue';
import FilterQuery from '@/components/Content/FilterQuery.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterCheckbox',

  components: {
    AppCheckbox,
    FilterQuery,
  },

  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: [String, Number, Array, Object, Boolean],
      required: true
    },
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
  <div>
    <filter-query v-slot="{ model }" :name="name">
      <app-checkbox 
        v-for="option in options"
        :key="option.id"
        v-model="selectedValue"
        :value="option.id"
        class="filter__checkbox"
      >
        {{ option.value }}
      </app-checkbox>
    </filter-query>
  </div>
</template>

<style scoped>
  .filter__checkbox:not(:last-child) {
    margin-bottom: 10px;
  }
</style>