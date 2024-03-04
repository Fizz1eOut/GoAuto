<script>
import { defineComponent } from 'vue';
import TheOurAdvantages from '@/components/Content/TheOurAdvantages.vue';
import TheConsultation from '@/components/Content/TheConsultation.vue';
import ThePartners from '@/components/Content/ThePartners.vue';
import HomeFilterBlock from '@/components/Content/HomeFilterBlock.vue';
import AppFeaturedProduct from '@/components/Base/AppFeaturedProduct.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    TheOurAdvantages,
    TheConsultation,
    ThePartners,
    HomeFilterBlock,
    AppFeaturedProduct,
},

});
</script>

<template>
  <home-filter-block />
  <the-our-advantages />
  <app-featured-product />
  <the-partners />
  <the-consultation />
</template>

<style scoped>

</style>
