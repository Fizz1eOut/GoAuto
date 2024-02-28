<script>
import { defineComponent } from 'vue';
import TheOurAdvantages from '@/components/Content/TheOurAdvantages.vue';
import TheConsultation from '@/components/Content/TheConsultation.vue';
import ThePartners from '@/components/Content/ThePartners.vue';
import TheSelection from '@/components/Content/TheSelection.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    TheOurAdvantages,
    TheConsultation,
    ThePartners,
    TheSelection
},

});
</script>

<template>
  <the-selection />
  <the-our-advantages />
  <the-partners />
  <the-consultation />
</template>

<style scoped>

</style>
