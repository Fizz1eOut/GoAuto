<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import AppTitle from '@/components/Base/AppTitle.vue';
import TiresProducts from '@/components/Content/TiresProducts.vue';
import AppFilter from '@/components/Base/AppFilter.vue';
import FilterCheckbox from '@/components/Content/FilterCheckbox.vue';
import FilterSelect from '@/components/Content/FilterSelect.vue';
import optionsData from '@/api/options.json';
import productsData from '@/api/products.json';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheRims',

  components: {
    AppContainer,
    AppTitle,
    TiresProducts,
    AppFilter,
    FilterCheckbox,
    FilterSelect,
},

data() {
    return {
      rebalancing: 0,
      et: 0,
      diameter: 0,
      width: 0,
      brand: 0,
    };
  },
  
  computed: {
    rebalancingOptions() {
      const rebalancingOption = optionsData.find(option => option.title === 'Разболтовка');
      if (rebalancingOption) {
        const arr = this.findProductOptions(rebalancingOption.id);
        // console.log(arr);
        arr.unshift({ id: 0,  value: "Виберіть разболтовку"});
        return arr;
      }
      return [];
    },

    etOptions() {
      const etOption = optionsData.find(option => option.title === 'ET');
      if (etOption) {
        const arr = this.findProductOptions(etOption.id);
        // console.log(arr);
        arr.unshift({ id: 0,  value: "Виберіть виліт"});
        return arr;
      }
      return [];
    },
    
    diameterOptions() {
      const diameterOption = optionsData.find(option => option.title === 'Діаметр');
      if (diameterOption) {
        const arr = this.findProductOptions(diameterOption.id);
        // console.log(arr);
        arr.unshift({ id: 0,  value: "Виберіть діаметр"});
        return arr;
      }
      return [];
    },

    widthOptions() {
      const widthOption = optionsData.find(option => option.title === 'Ширина диска');
      if (widthOption) {
        const arr = this.findProductOptions(widthOption.id);
        // console.log(arr);
        arr.unshift({ id: 0,  value: "Виберіть ширину"});
        return arr;
      }
      return [];
    },

    brandOptions() {
      const brandOption = optionsData.find(option => option.title === 'Бренд');
      if (brandOption) {
        const arr = this.findProductOptions(brandOption.id);
        // console.log(arr);
        arr.unshift({ id: 0,  value: "Виберіть бренд"});
        return arr;
      }
      return [];
    },
  }, 

  methods: {
    findProductOptions(optionId) {
      const productOptions = new Set();
      // console.log(productOptions)
      const filter = productsData.filter(product => product.category === 2);
      // console.log(productsData)
      // console.log(filter)
      filter.forEach(product => {
        const option = product.options.find(opt => opt.id === optionId);
        // console.log(option)
        if (option) {
          productOptions.add(option.value);
        }
      });

       return Array.from(productOptions).map((value) => ({ id: value, value }));
    }
  },
});
</script>

<template>
  <div class="tires">
    <app-container>
      <app-title>
        Диски
      </app-title>

      <div class="tires__items">
        <app-filter>
          <filter-checkbox />
          <filter-select v-model="rebalancing" :options="rebalancingOptions" />
          <filter-select v-model="et" :options="etOptions" />
          <filter-select v-model="diameter" :options="diameterOptions" />
          <filter-select v-model="width" :options="widthOptions" />
          <filter-select v-model="brand" :options="brandOptions" />
        </app-filter>

        <tires-products />
      </div>
    </app-container>
  </div>
</template>

<style scoped>
.tires__items {
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}
</style>
