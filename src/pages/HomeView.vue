<script>
import { defineComponent } from 'vue';
import TheOurAdvantages from '@/components/Content/TheOurAdvantages.vue';
import TheConsultation from '@/components/Content/TheConsultation.vue';
import ThePartners from '@/components/Content/ThePartners.vue';
import HomeFilterBlock from '@/components/Content/HomeFilterBlock.vue';
import AppSlider from '@/components/Base/AppSlider.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    TheOurAdvantages,
    TheConsultation,
    ThePartners,
    HomeFilterBlock,
    AppSlider,
},

});
</script>

<template>
  <home-filter-block />
  <the-our-advantages />
  <app-slider />
  <the-partners />
  <the-consultation />
</template>

<style scoped>

</style>
