<script>
import optionsData from '@/assets/api/options.json';
import productsData from '@/assets/api/products.json';
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
        options: optionsData,
        products: productsData
      };
    },
    
    computed: {
      tireWidthOptions() {
        const widthOptions = this.options.find(option => option.title === 'Ширина');
        if (widthOptions) {
          return this.findProductOptions(widthOptions.id);
        }
        return [];
      },
      boltPatternOptions() {
        const boltPatternOptions = this.options.find(option => option.title === 'Разболтовка');
        if (boltPatternOptions) {
          return this.findProductOptions(boltPatternOptions.id);
        }
        return [];
      },
      disableTireOptions() {
        return false;
      },
      disableWheelOptions() {
        return false;
      },
    },

    methods: {
      findProductOptions(optionId) {
        const productOptions = this.products.reduce((acc, product) => {
          const option = product.options.find(opt => opt.id === optionId);
          if (option) {
            acc.push({ value: option.value });
          }
          return acc;
        }, []);
        return productOptions;
      }
    }
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
