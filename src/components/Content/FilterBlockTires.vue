<script>
import optionsData from '@/assets/api/options.json';
import productsData from '@/assets/api/products.json';
import AppSelect from '@/components/Inputs/AppSelect.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FilterBlockTires',

    components: { 
      AppSelect 
    },

    data() {
      return {
        selectedWidthTires: null,
        selectedProfileTires: null,
        selectedDiameterTires: null,
        selectedSeasonTires: null,
      };
    },
    
    computed: {
      tireWidthOptions() {
        const widthOptions = optionsData.find(option => option.title === 'Ширина');
        if (widthOptions) {
          return this.findProductOptions(widthOptions.id);
        }
        return [];
      },

      profileTiresOptions() {
        const profileTiresOptions = optionsData.find(option => option.title === 'Профіль');
        if (profileTiresOptions) {
          return this.findProductOptions(profileTiresOptions.id);
        }
        return [];
      },
      
      diameterTiresOptions() {
        const diameterOptions = optionsData.find(option => option.title === 'Діаметр');
        if (diameterOptions) {
          return this.findProductOptions(diameterOptions.id);
        }
        return [];
      },

      seasonTiresOptions() {
        const seasonOptions = optionsData.find(option => option.title === 'Сезон');
        if (seasonOptions) {
          return this.findProductOptions(seasonOptions.id);
        }
        return [];
      },
    },

    methods: {
      findProductOptions(optionId) {
        const productOptions = new Set();
        // console.log(productOptions)
        productsData.forEach(product => {
          const option = product.options.find(opt => opt.id === optionId);
          // console.log(option)
          if (option) {
            productOptions.add(option.value);
          }
        });
        return Array.from(productOptions).map(value => ({ value }));
      }
    },
});
</script>

<template>
  <app-select 
    v-model="selectedWidthTires"
    :options="tireWidthOptions"
    placeholder="Ширина"
  />

  <app-select 
    v-model="selectedProfileTires"
    :options="profileTiresOptions"
    placeholder="Профіль"
  />

  <app-select 
    v-model="selectedDiameterTires"
    :options="diameterTiresOptions"
    placeholder="Діаметр"
  />

  <app-select 
    v-model="selectedSeasonTires"
    :options="seasonTiresOptions"
    placeholder="Сезон"
  />
</template>

<style scoped>

</style>
