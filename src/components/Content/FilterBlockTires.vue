<script>
import optionsData from '@/api/options.json';
import productsData from '@/api/products.json';
import AppContainer from '@/components/Base/AppContainer.vue';
import AppUnderlay from '@/components/Base/AppUnderlay.vue';
import AppSelect from '@/components/Inputs/AppSelect.vue';
import AppTitle from '@/components/Base/AppTitle.vue';
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
      selectedWidthTires: 0,
      selectedProfileTires: 0,
      selectedDiameterTires: 0,
      selectedSeasonTires: 0,
      selectedBrandTires: 0,
    };
  },
  
  computed: {
    tireWidthOptions() {
      const widthOptions = optionsData.find(option => option.title === 'Ширина');
      if (widthOptions) {
        const arr = this.findProductOptions(widthOptions.id);
        // console.log(arr);
        arr.unshift({ id: 0,  value: "Виберіть ширину"});
        return arr;
      }
      return [];
    },

    profileTiresOptions() {
      const profileTiresOptions = optionsData.find(option => option.title === 'Профіль');
      if (profileTiresOptions) {
        const arr = this.findProductOptions(profileTiresOptions.id);
        // console.log(arr);
        arr.unshift({ id: 0,  value: "Виберіть профіль"});
        return arr;
      }
      return [];
    },
    
    diameterTiresOptions() {
      const diameterOptions = optionsData.find(option => option.title === 'Діаметр');
      if (diameterOptions) {
        const arr = this.findProductOptions(diameterOptions.id);
        // console.log(arr);
        arr.unshift({ id: 0,  value: "Виберіть діаметр"});
        return arr;
      }
      return [];
    },

    seasonTiresOptions() {
      const seasonOptions = optionsData.find(option => option.title === 'Сезон');
      if (seasonOptions) {
        const arr = this.findProductOptions(seasonOptions.id);
        // console.log(arr);
        arr.unshift({ id: 0,  value: "Виберіть сезон"});
        return arr;
      }
      return [];
    },

    brandTiresOptions() {
      const brandOptions = optionsData.find(option => option.title === 'Бренд');
      if (brandOptions) {
        const arr = this.findProductOptions(brandOptions.id);
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

       return Array.from(productOptions).map((value) => ({ id: value, value }));
    },

    applyFilters() {
      // Формируем объект с параметрами для URL
      const query = {};
      if (this.selectedWidthTires) query.width = this.selectedWidthTires;
      if (this.selectedProfileTires) query.profile = this.selectedProfileTires;
      if (this.selectedDiameterTires) query.diameter = this.selectedDiameterTires;
      if (this.selectedSeasonTires) query.season = this.selectedSeasonTires;
      if (this.selectedBrandTires) query.brand = this.selectedBrandTires;
      
      // Переход на страницу с фильтрами и передача параметров через URL
      this.$router.push({ path: '/tires', query });
    },
  },
});
</script>

<template>
  <app-underlay>
    <app-container size="md">
      <div class="tires">
        <app-title>
          Шини
        </app-title>

        <div class="tires__items">
          <div class="tires__item">
            <app-select 
              v-model="selectedWidthTires"
              :options="tireWidthOptions"
              value-key="id"
              label-key="value"
            />

            <app-select 
              v-model="selectedDiameterTires"
              :options="diameterTiresOptions"
              value-key="id"
              label-key="value"
            />

            <app-select 
              v-model="selectedBrandTires"
              :options="brandTiresOptions"
              value-key="id"
              label-key="value"
            />

            <AppButton @click="applyFilters">
              Підібрати шини
            </AppButton>
          </div>

          <div class="tires__item">
            <app-select 
              v-model="selectedProfileTires"
              :options="profileTiresOptions"
              value-key="id"
              label-key="value"
            />

            <app-select 
              v-model="selectedSeasonTires"
              :options="seasonTiresOptions"
              value-key="id"
              label-key="value"
            />
          </div>
        </div>
      </div>
    </app-container>
  </app-underlay>
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
