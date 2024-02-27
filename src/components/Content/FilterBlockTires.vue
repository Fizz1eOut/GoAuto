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
      selectedWidthTires: null,
      selectedProfileTires: null,
      selectedDiameterTires: null,
      selectedSeasonTires: null,
      selectedBrandTires: null,
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

    brandTiresOptions() {
      const brandOptions = optionsData.find(option => option.title === 'Бренд');
      if (brandOptions) {
        return this.findProductOptions(brandOptions.id);
      }
      return [];
    },
  },

  methods: {
    findProductOptions(optionId) {
      const productOptions = new Set();
      // console.log(productOptions)
      const filter = productsData.filter(product => product.category === 1);
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
          Шини
        </app-title>

        <div class="tires__items">
          <div class="tires__item">
            <app-select 
              v-model="selectedWidthTires"
              :options="tireWidthOptions"
              placeholder="Ширина"
              value-key="id"
              label-key="value"
            />

            <app-select 
              v-model="selectedDiameterTires"
              :options="diameterTiresOptions"
              placeholder="Діаметр"
              value-key="id"
              label-key="value"
            />

            <app-select 
              v-model="selectedBrandTires"
              :options="brandTiresOptions"
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
              v-model="selectedProfileTires"
              :options="profileTiresOptions"
              placeholder="Профіль"
              value-key="id"
              label-key="value"
            />

            <app-select 
              v-model="selectedSeasonTires"
              :options="seasonTiresOptions"
              placeholder="Сезон"
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
