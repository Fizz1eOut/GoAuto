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
      // Фильтрация продуктов по категории с идентификатором 2
      const categoryProducts = productsData.filter((product) => product.category === 2);
      
      // Создание карты опций для каждого продукта
      const options = categoryProducts.reduce((map, product) => {
        // Для каждого продукта в категории
        return product.options.reduce((acc, option) => {
          // Получаем набор значений для опции или создаем новый набор, если он еще не существует
          const value = acc.get(option.id);
          if (!value) {
            return acc.set(option.id, new Set([option.value]));
          }

          // Если набор уже существует, добавляем значение к нему
          value.add(option.value);
          return acc;
        }, map);
      }, new Map());
      // console.log(options)

      // Фильтрация опций из массива optionsData на основе созданных наборов
      return optionsData
        .filter((option) => options.has(option.id))
        .map((option) => {
          // Получаем уникальные значения для опции из карты options
          const values = options.get(option.id);
          // console.log(values);
          // Создаем массив объектов с уникальными значениями
          const data = [...values].map((id) => ({ id, value: id }));
          // console.log(data);
          // Если тип опции "single", добавляем заголовок опции в начало массива данных
          if (option.type === 'single') {
            data.unshift({ id: 0, value: option.title });
          }

          // Возвращаем объект, содержащий опцию и ее уникальные значения
          return { option, data };
      });
    }
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
        <app-filter>
          <template
            v-for="{option, data} in productsOptions"
            :key="option.id"
          >
            <filter-select 
              v-if="option.type === 'single'"
              :options="data"
              :name="option.name"
            />
          </template>

          <app-subtitle class="subtitle">
            {{ brandOption.title }}
          </app-subtitle>

          <template
            v-for="productOption in productsOptions"
            :key="productOption.option.id"
          >
            <filter-checkbox 
              v-if="productOption.option.type === 'multiple'"
              :options="productOption.data"
              :name="productOption.option.name"
            />
          </template>

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
  @media (max-width: 768px) {
    .tires__items {
      flex-direction: column;
      row-gap: 20px;
    }
  }
</style>
