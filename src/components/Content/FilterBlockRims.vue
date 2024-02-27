<script>
import optionsData from '@/api/options.json';
import productsData from '@/api/products.json';
import AppContainer from '@/components/Base/AppContainer.vue';
import AppUnderlay from '@/components/Base/AppUnderlay.vue';
import AppSelect from '@/components/Inputs/AppSelect.vue';
import AppTitle from '@/components/Base/AppTitle.vue'
import { defineComponent } from 'vue';
import AppButton from '@/components/Base/AppButton.vue';

export default defineComponent({
  name: 'FilterBlockTires',

  components: {
    AppSelect,
    AppContainer,
    AppUnderlay,
    AppTitle,
    AppButton
},

  data() {
    return {
      rebalancing: null,
      et: null,
      diameter: null,
      width: null,
      brand: null,
    };
  },
  
  computed: {
    rebalancingOptions() {
      const rebalancingOption = optionsData.find(option => option.title === 'Разболтовка');
      if (rebalancingOption) {
        return this.findProductOptions(rebalancingOption.id);
      }
      return [];
    },

    etOptions() {
      const etOption = optionsData.find(option => option.title === 'ET');
      if (etOption) {
        return this.findProductOptions(etOption.id);
      }
      return [];
    },
    
    diameterOptions() {
      const diameterOption = optionsData.find(option => option.title === 'Діаметр');
      if (diameterOption) {
        return this.findProductOptions(diameterOption.id);
      }
      return [];
    },

    widthOptions() {
      const widthOption = optionsData.find(option => option.title === 'Ширина диска');
      if (widthOption) {
        return this.findProductOptions(widthOption.id);
      }
      return [];
    },

    brandOptions() {
      const brandOption = optionsData.find(option => option.title === 'Бренд');
      if (brandOption) {
        return this.findProductOptions(brandOption.id);
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

       return Array.from(productOptions).map(value => ({ value }));
      // const optionsArray = Array.from(productOptions).map(value => ({ value }));
      // optionsArray.unshift({ title: 'Выберите опцию',  value: 0});
      // console.log(optionsArray)
      // return optionsArray
    }
  },
});
</script>

<template>
  <AppUnderlay>
    <AppContainer size="md">
      <div class="tires">
        <app-title>
          Диски
        </app-title>

        <div class="tires__items">
          <div class="tires__item">
            <app-select 
              v-model="diameter"
              :options="diameterOptions"
              placeholder="Діаметр"
              value-key="id"
              label-key="value"
            />
            
            <app-select 
              v-model="width"
              :options="widthOptions"
              placeholder="Ширина"
              value-key="id"
              label-key="value"
            />

            <app-select 
              v-model="brand"
              :options="brandOptions"
              placeholder="Бренд"
              value-key="id"
              label-key="value"
            />

            <AppButton>
              Підібрати шини
            </AppButton>
          </div>

          <div class="tires__item">
            <app-select 
              v-model="rebalancing"
              :options="rebalancingOptions"
              placeholder="Разболтовка"
              value-key="id"
              label-key="value"
            />

            <app-select 
              v-model="et"
              :options="etOptions"
              placeholder="Виліт"
              value-key="id"
              label-key="value"
            />
          </div>
        </div>
      </div>
    </AppContainer>
  </AppUnderlay>
</template>

<style scoped>
  .tires {
  text-align: center;
  }
  .tires__items {
    margin-top: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }
  .tires__item {
    width: 100%;
  }
  .tires__item> *:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
  .tires__items {
    flex-direction: column;
  }
  .tires__item:first-child {
    order: 1;
  }
} 
</style>