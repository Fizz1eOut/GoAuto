<script>
import { defineComponent } from 'vue';
import TheOurAdvantages from '@/components/Content/TheOurAdvantages.vue';
import TheConsultation from '@/components/Content/TheConsultation.vue';
import ThePartners from '@/components/Content/ThePartners.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    TheOurAdvantages,
    TheConsultation,
    ThePartners
},

});
</script>

<template>
  <the-our-advantages />
  <the-consultation />
  <the-partners />
</template>

<style scoped>

</style>
