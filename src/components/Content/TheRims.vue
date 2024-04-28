<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import AppTitle from '@/components/Base/AppTitle.vue';
import AppFilterProducts from '@/components/Base/AppFilterProducts.vue';
import AppFilter from '@/components/Base/AppFilter.vue';
import FilterCheckbox from '@/components/Content/FilterCheckbox.vue';
import FilterSelect from '@/components/Content/FilterSelect.vue';
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import AppInput from '@/components/Inputs/AppInput.vue';
import optionsData from '@/api/options.json';
import productsData from '@/api/products.json';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheRims',

  components: {
    AppContainer,
    AppTitle,
    AppFilterProducts,
    AppFilter,
    FilterCheckbox,
    FilterSelect,
    AppSubtitle,
    AppInput,
  },

  data() {
    return {
      rebalancing: 0,
      et: 0,
      diameter: 0,
      width: 0,
      brand: 0,
      selectedBrands: [],
    };
  },
    
  computed: {
    brandOption() {
      const option = optionsData.find(option => option.id === 4);
      return option;
    },

       // Создание объекта query для использования в $router.push
    queryParams() {
      return {
        priceFrom: this.priceFrom,
        priceTo: this.priceTo
      };
    },


    productsOptions() {
      // Фильтруем продукты по категории
      const categoryProducts = productsData.filter(product => product.category === 2);
      console.log(categoryProducts);

      // Создаем новый Set для хранения опций
      const productOptions = new Set();
      console.log(productOptions);

      // Проходим по каждому продукту из категории
      categoryProducts.forEach(product => {
        // Добавляем все id опций продукта в Set
        product.options.forEach(option => productOptions.add(option.id));
      });

      // Преобразуем Set обратно в массив и возвращаем его
      const productOptionsArray = Array.from(productOptions);
      console.log(productOptionsArray);

      // Фильтруем опции по id
      const filteredOptions = optionsData.filter(option => productOptionsArray.includes(option.id));
      console.log(filteredOptions);

      return filteredOptions;
    },
  }, 

  created() {
    // Получаем параметры запроса из URL
    const params = this.$route.query;
    
    // Устанавливаем значения переменным данных на основе параметров запроса
    this.priceFrom = params.priceFrom || '';
    this.priceTo = params.priceTo || '';
  },

  methods: {
    updatePrice() {
      const query = {};

      if (/^\d+$/.test(this.priceFrom)) {
        query.priceFrom = this.priceFrom;
      }

      if (/^\d+$/.test(this.priceTo)) {
        query.priceTo = this.priceTo;
      }

      this.$router.push({ query });
    },

    applyFilters() {
      alert('Hell World');
    },
  }
});
</script>

<template>
  <div class="tires">
    <app-container>
      <app-title>
        Диски
      </app-title>

      <div class="tires__items">
        <app-filter @apply="applyFilters">
          <!-- <filter-select 
            v-for="option in productsOptions"
            :key="option"
            v-model="rebalancing" 
            :options="option"
            name="bolt-pattern"
          /> -->

          <template
            v-for="option in productsOptions"
            :key="option.id"
          >
            <filter-select 
              v-if="option.type === 'single'"
              v-model="rebalancing" 
              :options="option"
              name="bolt-pattern"
            />
          </template>
          <!-- <filter-select v-model="et" :options="productsOptions" name="et" />
          <filter-select v-model="diameter" :options="productsOptions" name="diameter" />
          <filter-select v-model="width" :options="productsOptions" name="width-rims" /> -->

          <app-subtitle class="subtitle">
            {{ brandOption.title }}
          </app-subtitle>

          <!-- <filter-checkbox v-model="selectedBrands" :options="productsOptions" name="brand" /> -->

          <div class="filter__price">
            <app-input 
              v-model="priceFrom"
              placeholder="від 837"
              type="number"
              @input="updatePrice"
            />

            <app-input 
              v-model="priceTo"
              placeholder="до 28923"
              type="number"
              @input="updatePrice"
            />
          </div>
        </app-filter>

        <app-filter-products :category="2" />
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
  .subtitle {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .filter__price {
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }
</style>
