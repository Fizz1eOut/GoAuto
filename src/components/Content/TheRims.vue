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

      // Создаем объект productOptions для хранения опций
      const productOptions = {};
      console.log(productOptions);

      // Проходим по каждому продукту из категории
      categoryProducts.forEach(product => {
        // Проходим по каждой опции продукта
        product.options.forEach(option => {
          // Если опция с таким id уже существует в productOptions, добавляем её значение в существующий Set
          if (option.id in productOptions) {
           return productOptions[option.id].add(option.value);
          } else {
            // Если опция с таким id ещё не существует, создаем новый Set и добавляем в него значение опции
            productOptions[option.id] = new Set([option.value]);
          }
        });
      });

      // Получаем массив ключей объекта productOptions
      const options = Object.keys(productOptions);

      const filteredOptions = optionsData
        // Фильтруем опции из optionsData по id и присваиваем каждой опции связанный с ней Set значений из productOptions
        .filter(option => options.includes(option.id.toString()))
        .map(option => ({
          // Присваиваем свойству option объект опции
          option,
           // Преобразуем значения из Set в массив, а затем мапим каждое значение в объект с одинаковыми id и value
          data: [
                { id: 0, value: `${option.title}` }, // Добавляем опцию "Выберите"
                ...Array.from(productOptions[option.id]).map(optionObject => ({ id: optionObject, value: optionObject }))
            ]
        }));
            
        console.log(filteredOptions);
        return filteredOptions; // Возвращаем отфильтрованные опции
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
          <template
            v-for="productOption in productsOptions"
            :key="productOption.option.id"
          >
            <filter-select 
              v-if="productOption.option.type === 'single'"
              v-model="rebalancing" 
              :options="productOption.data"
              :name="productOption.option.name"
            />
          </template>

          <app-subtitle class="subtitle">
            {{ brandOption.title }}
          </app-subtitle>

          <!-- <filter-checkbox v-model="selectedBrands" :options="productsOptions" name="brand" /> -->
          <template
            v-for="productOption in productsOptions"
            :key="productOption.option.id"
          >
            <filter-checkbox 
              v-if="productOption.option.type === 'multiple'"
              v-model="rebalancing" 
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
</style>
