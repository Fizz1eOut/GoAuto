<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import AppUnderlay from '@/components/Base/AppUnderlay.vue';
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import AppSelect from '@/components/Inputs/AppSelect.vue';
import AppCheckbox from '@/components/Inputs/AppCheckbox.vue';
import AppInput from '@/components/Inputs/AppInput.vue';
import optionsData from '@/api/options.json';
import productsData from '@/api/products.json';
import { defineComponent } from 'vue';
import AppButton from '@/components/Base/AppButton.vue';

export default defineComponent({
  name: 'TiresFilter',

  components: {
    AppContainer,
    AppUnderlay,
    AppSubtitle,
    AppSelect,
    AppCheckbox,
    AppInput,
    AppButton
},

  data() {
    return {
      selectedWidthTires: 0,
      selectedProfileTires: 0,
      selectedDiameterTires: 0,
      selectedSeasons: [],
      selectedBrands: [],
      priceFrom: '',
      priceTo: '',
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

    seasonOptions() {
      const seasonOption = optionsData.find(option => option.id === 5);
      if (seasonOption) {
        const arr = this.findProductOptions(seasonOption.id);
        return arr;
      }
      return [];
    },

    brandOptions() {
      const brandOption = optionsData.find(option => option.id === 4);
      if (brandOption) {
        const arr = this.findProductOptions(brandOption.id);
        return arr
      }
      return []
    },


    // Создание объекта query для использования в $router.push
    queryParams() {
      return {
        width: this.selectedWidthTires,
        profile: this.selectedProfileTires,
        diameter: this.selectedDiameterTires,
        seasons: this.selectedSeasons.join(','),
        brands: this.selectedBrands.join(','),
        priceFrom: this.priceFrom,
        priceTo: this.priceTo
      };
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

    // Применение текущих выбранных фильтров и обновление URL
    applyFilters() {
      const query = {};
      if (this.selectedWidthTires) query.width = this.selectedWidthTires;
      if (this.selectedProfileTires) query.profile = this.selectedProfileTires;
      if (this.selectedDiameterTires) query.diameter = this.selectedDiameterTires;
      if (this.selectedSeasons.length > 0) query.seasons = this.selectedSeasons.join(',');
      if (this.selectedBrands.length > 0) query.brands = this.selectedBrands.join(',');
      if (this.priceFrom) query.priceFrom = this.priceFrom;
      if (this.priceTo) query.priceTo = this.priceTo;

      this.$router.push({ query });
    }
  },
});
</script>

<template>
  <app-underlay>
    <app-container>
      <div class="tires-filter">
        <div class="tires-filter__body">
          <div class="tires-filter__item">
            <app-subtitle>
              Фільтри
            </app-subtitle>

            <div class="tires-filter__content">
              <app-select 
                v-model="selectedWidthTires"
                :options="tireWidthOptions"
                value-key="id"
                label-key="value"
              />

              <app-select 
                v-model="selectedProfileTires"
                :options="profileTiresOptions"
                value-key="id"
                label-key="value"
              />

              <app-select 
                v-model="selectedDiameterTires"
                :options="diameterTiresOptions"
                value-key="id"
                label-key="value"
              />
            </div>
          </div>

          <div class="tires-filter__item">
            <app-subtitle>
              Сезон
            </app-subtitle>

            <div class="tires-filter__content">
              <app-checkbox 
                v-for="season in seasonOptions" 
                :key="season.id" 
                v-model="selectedSeasons"
                :value="season.id"
              >
                {{ season.value }}
              </app-checkbox>
            </div>
          </div>

          <div class="tires-filter__item">
            <app-subtitle>
              Бренд
            </app-subtitle>

            <div class="tires-filter__content">
              <app-checkbox 
                v-for="brand in brandOptions" 
                :key="brand.id" 
                v-model="selectedBrands"
                :value="brand.id"
              >
                {{ brand.value }}
              </app-checkbox>
            </div>
          </div>

          <div class="tires-filter__item">
            <app-subtitle>
              Ціна
            </app-subtitle>

            <div class="tires-filter__price">
              <app-input 
                v-model="priceFrom"
                placeholder="від 837"
                type="number"
              />

              <app-input 
                v-model="priceTo"
                placeholder="до 28923"
                type="number"
              />
            </div>
          </div>

          <app-button @click="applyFilters">
            Застосувати фільтри
          </app-button>
        </div>
      </div>
    </app-container>
  </app-underlay>
</template>

<style scoped>
.tires-filter {
  width: 300px;
}
.tires-filter__body {
  margin-top: 14px;
}
.tires-filter__body> *:not(:last-child) {
  margin-bottom: 30px;
}
.tires-filter__content {
  margin-top: 20px;
}
.tires-filter__content> *:not(:last-child) {
  margin-bottom: 10px;
}
.tires-filter__price {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
</style>
