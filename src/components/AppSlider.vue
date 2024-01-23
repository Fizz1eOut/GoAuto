<script>
import { defineComponent } from 'vue';
import { register } from 'swiper/element/bundle';
register();

export default defineComponent({
  name: 'AppSlider',
  components: {
    
  }
});
</script>

<template>
<swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 4</swiper-slide>
  <swiper-slide>Slide 5</swiper-slide>
  <swiper-slide>Slide 6</swiper-slide>
  <swiper-slide>Slide 7</swiper-slide>
</swiper-container>
</template>

<style scoped>

</style>