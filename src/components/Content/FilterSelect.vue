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
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
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
    <filter-query v-slot="{ value, update }" :name="name" type="single">
      <app-select 
        :options="options"
        :model-value="value"
        @update:model-value="update"
      />
    </filter-query>
  </div>
</template>

<style scoped>
  .filter__select:not(:last-child) {
    margin-bottom: 10px;
  }
</style>