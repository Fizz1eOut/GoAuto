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
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div>
    <filter-query v-slot="{ value, update }" :name="name">
      <app-checkbox 
        v-for="option in options"
        :key="option.id"
        :model-value="value"
        :value="option.id"
        class="filter__checkbox"
        @update:model-value="update"
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