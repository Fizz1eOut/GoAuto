<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import AppUnderlay from '@/components/Base/AppUnderlay.vue';
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
// import optionsData from '@/api/options.json';
// import productsData from '@/api/products.json';
import { defineComponent } from 'vue';
import AppButton from '@/components/Base/AppButton.vue';

export default defineComponent({
  name: 'AppFilter',

  components: {
    AppContainer,
    AppUnderlay,
    AppSubtitle,
    AppButton
  },

  props: {
    checkboxOptions: {
      type: Array,
      default: () => []
    },
    selectOptions: {
      type: Array,
      default: () => []
    }
  },

  // data() {
  //   return {
  //   };
  // },

  // computed: {
    
  // },  

  // methods: {
    
  // },
});
</script>

<template>
  <app-underlay>
    <app-container>
      <div class="filter">
        <div class="filter__body">
          <app-subtitle>
            Фільтри
          </app-subtitle>

          <div class="filter__item">
            <slot />
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
.filter {
  width: 300px;
}
.filter__body {
  margin-top: 14px;
}
.filter__body> *:not(:last-child) {
  margin-bottom: 30px;
}
.filter__content {
  margin-top: 20px;
}
.filter__content> *:not(:last-child) {
  margin-bottom: 10px;
}
.filter__price {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
</style>