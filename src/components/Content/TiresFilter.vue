<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import AppUnderlay from '@/components/Base/AppUnderlay.vue';
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import AppSelect from '@/components/Inputs/AppSelect.vue';
import AppCheckbox from '@/components/Inputs/AppCheckbox.vue'
import optionsData from '@/api/options.json';
import productsData from '@/api/products.json';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TiresFilter',

  components: {
    AppContainer,
    AppUnderlay,
    AppSubtitle,
    AppSelect,
    AppCheckbox,
  },

  data() {
    return {
      selectedWidthTires: 0,
      selectedProfileTires: 0,
      selectedDiameterTires: 0,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false
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
              <app-checkbox v-model="checkbox1" title="Літні" />
              <app-checkbox v-model="checkbox2" title="Зимові" />
              <app-checkbox v-model="checkbox3" title="Всесезонні" />
            </div>
          </div>
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
</style>
