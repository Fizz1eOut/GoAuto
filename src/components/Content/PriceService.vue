<script>
import AppTitle from '@/components/Base/AppTitle.vue';
import TheCars from '@/components/Content/TheCars.vue';
import TheCrossovers from '@/components/Content/TheCrossovers.vue';
import TireStorage from '@/components/Content/TireStorage.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PriceService',

  components: {
    TheCars,
    TheCrossovers,
    TireStorage,
    AppTitle
}
});
</script>

<template>
  <div class="price-service">
    <app-title class="title">
      Прайс на послуги шиномонтажу
    </app-title>

    <the-cars />
    <the-crossovers />
    <tire-storage />
  </div>
</template>

<style scoped>
  .title {
    margin-top: 60px;
    text-align: center;
  }
  @media (max-width: 768px) {
    .title {
      margin-top: 40px;
      text-align: center;
    }
  }
  @media (max-width: 499px) {
    .title {
      margin-top: 20px;
      text-align: start;
    }
  }
</style>