<script>
import AppSlider from '@/components/Base/AppSlider.vue';
import productsData from '@/api/products.json';
// console.log(productsData);
import AppTitle from '@/components/Base/AppTitle.vue';
import AppProduct from '@/components/Base/AppProduct.vue';
import { SplideSlide } from '@splidejs/vue-splide';
// import '@splidejs/vue-splide/css';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFeaturedProduct',

  components: {
    AppSlider,
    AppTitle,
    AppProduct,
    SplideSlide,
  },
  
  data() {
    return {
    }
  },
  computed: {
    featuredProducts() {
      return productsData.filter(item => item.featured === true);
    }
  },

  methods: {
    
  },
  
});
</script>

<template>
  <app-title>
    Рекомендовані товари
  </app-title>
  <app-slider>
    <SplideSlide v-for="featuredProduct in featuredProducts" :key="featuredProduct.id">
      <app-product :product="featuredProduct" />
    </SplideSlide>
  </app-slider>
</template>

<style>

</style>