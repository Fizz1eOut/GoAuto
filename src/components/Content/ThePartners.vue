<script>
import { defineComponent } from 'vue';
import IconBridgestone from '@/components/icons/IconBridgestone.vue';
import IconGoodyear from '@/components/icons/IconGoodyear.vue';
import IconMichelin from '@/components/icons/IconMichelin.vue';
import AppTitle from '@/components/Base/AppTitle.vue'

export default defineComponent({
  name: 'ThePartners',
  
  components: {
    IconMichelin,
    IconBridgestone,
    IconGoodyear,
    AppTitle
  },
});
</script>

<template>
  <div class="partners">
    <app-title>Партнери</app-title>
    <div class="partners__items">
      <div class="partners__item">
        <icon-michelin />
      </div>

      <div class="partners__item">
        <icon-bridgestone />
      </div>

      <div class="partners__item">
        <icon-goodyear />
      </div>

      <div class="partners__item">
        <icon-michelin />
      </div>
    </div>
  </div>
</template>

<style scoped>
.partners {
  margin-top: 120px;
}
.partners__items {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px;
  overflow-x: auto;
  padding-bottom: 10px;
}
.partners__item {
  min-width: 250px;
  width: 100%;
}
@media (max-width: 991px) {
  .partners {
    margin-top: 100px;
  }
}

@media (max-width: 768px) {
  .partners {
    margin-top: 70px;
  }
}
@media (max-width: 499px) {
  .partners__items {
    margin-top: 40px;
  }
}
</style>
