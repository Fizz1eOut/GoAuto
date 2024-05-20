<script>
import AppTitle from '@/components/Base/AppTitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OurWorks',

  components: {
    AppTitle
  },

  data() {
    return {
      images: []
    };
  },

  mounted() {
    for (let i = 1; i <= 12; i++) {
      const imageName = `../../assets/images/our-products/${i}.svg`;
      // console.log(imageName)
      const imageUrl = new URL(imageName, import.meta.url).href;
      // console.log(imageUrl)
      this.images.push({ id: i, src: imageUrl, alt: `Зображення ${i}` });
    }
  }
});
</script>

<template>
  <div class="our-works">
    <AppTitle>
      Наші роботи
    </AppTitle>
    <div class="our-works__body">
      <div v-for="image in images" :key="image.id" class="our-works__image">
        <img :src="image.src" :alt="image.alt">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .our-works {
    margin-top: 20px;
  }
  .our-works__body {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 6px;
    row-gap: 20px;
  }
  .our-works__image img {
    max-width: 100%;
  }
  @media (max-width: 499px) {
    .our-works__body {
      margin-top: 20px;
    }
  }
</style>