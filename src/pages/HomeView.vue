<script>
import { defineComponent } from 'vue';
import TheProductSelection from '../components/сhoose/TheProductSelection.vue';
import TheOurAdvantages from '../components/OurAdvantages/TheOurAdvantages.vue';
import AppSlider from '@/components/AppSlider.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    TheProductSelection,
    TheOurAdvantages,
    AppSlider,
  },

  data() {
    return {
      
    }
  },

  methods: {
    
  }
});
</script>

<template>
  <the-product-selection></the-product-selection>
  <the-our-advantages></the-our-advantages>
  <app-slider></app-slider>
</template>

<style scoped>

</style>
