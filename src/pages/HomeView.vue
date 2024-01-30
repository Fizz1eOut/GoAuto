<script>
import { defineComponent } from 'vue';
import TheOurAdvantages from '@/components/Content/TheOurAdvantages.vue';
import TheConsultation from '@/components/Content/TheConsultation.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    TheOurAdvantages,
    TheConsultation,
  },

});
</script>

<template>
  <the-our-advantages></the-our-advantages>
  <the-consultation></the-consultation>
</template>

<style scoped>

</style>
