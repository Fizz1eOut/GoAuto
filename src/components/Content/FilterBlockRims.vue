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
  name: 'FilterBlockRims',

  components: {
    AppSelect,
    AppContainer,
    AppUnderlay,
    AppTitle,
    AppButton
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
  <AppUnderlay>
    <AppContainer size="md">
      <div class="rims">
        <app-title>
          Диски
        </app-title>

        <div class="rims__items">
          <div class="rims__item">
            <app-select 
              v-model="width"
              :options="widthOptions"
              value-key="id"
              label-key="value"
            />

            <app-select 
              v-model="diameter"
              :options="diameterOptions"
              value-key="id"
              label-key="value"
            />

            <app-select 
              v-model="brand"
              :options="brandOptions"
              value-key="id"
              label-key="value"
            />

            <AppButton>
              Підібрати шини
            </AppButton>
          </div>

          <div class="rims__item">
            <app-select 
              v-model="rebalancing"
              :options="rebalancingOptions"
              value-key="id"
              label-key="value"
            />

            <app-select 
              v-model="et"
              :options="etOptions"
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
  .rims {
  text-align: center;
  }
  .rims__items {
    margin-top: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }
  .rims__item {
    width: 100%;
  }
  .rims__item> *:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
  .rims__items {
    flex-direction: column;
  }
  .rims__item:first-child {
    order: 1;
  }
} 
</style>