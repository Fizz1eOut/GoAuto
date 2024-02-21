<script>
import AppSelect from '@/components/Inputs/AppSelect.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TheSelection',

    components: { 
      AppSelect 
    },

    data() {
    return {
      selectedWidth: null,
      selectedBoltPattern: null,
    };
    },
    
    computed: {
      tireWidthOptions() {
        return [
          { value: '195' },
          { value: '205' },        
        ];
      },
      boltPatternOptions() {
        return [
          {  value: '5x114.3' },
          {  value: '5x120' },
        ];
      },
      disableTireOptions() {
        return false;
      },
      disableWheelOptions() {
        return false;
      },
    },
});
</script>

<template>
  <app-select 
    v-model="selectedWidth"
    :options="tireWidthOptions"
    idKey="id"
    valueKey="value"
    :disabled="disableTireOptions"
    placeholder="Ширина"
  />

  <app-select 
    v-model="selectedBoltPattern"
    :options="boltPatternOptions"
    idKey="id"
    valueKey="value"
    :disabled="disableWheelOptions"
    placeholder="Разболтовка"
  />
</template>

<style scoped>

</style>
