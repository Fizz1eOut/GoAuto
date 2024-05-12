<script>
import AppSlider from '@/components/Base/AppSlider.vue';
import productsData from '@/api/products.json';
import AppTitle from '@/components/Base/AppTitle.vue';
import AppProduct from '@/components/Base/AppProduct.vue';
import { SplideSlide } from '@splidejs/vue-splide';
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
      return productsData.filter(item => item.featured);
    }
  },

  methods: {
    
  },
  
});
</script>

<template>
  <div class="featured-products">
    <app-title>
      Рекомендовані товари
    </app-title>
    <app-slider>
      <SplideSlide v-for="featuredProduct in featuredProducts" :key="featuredProduct.id">
        <app-product :product="featuredProduct" />
      </SplideSlide>
    </app-slider>
  </div>
</template>

<style>
  .featured-products {
    margin-top: 120px;
  }
  @media (max-width: 768px) {
    .featured-products {
    margin-top: 100px;
  }
  }

  @media (max-width: 499px) {
    .featured-products {
    margin-top: 70px;
  }
  }
</style>