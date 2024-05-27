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
    // Получаем все файлы из папки '../../assets/images/our-products/' с расширением '.svg'
    const imageFiles = import.meta.glob('../../assets/images/our-products/*.svg');
    
    for (const path in imageFiles) {
      imageFiles[path]().then((mod) => {
        // Извлекаем URL изображения из загруженного модуля
        const imageUrl = mod.default;
        // Получаем имя файла из пути
        const fileName = path.split('/').pop();
        // Формируем объект изображения и добавляем его в массив images
        this.images.push({
          id: this.images.length + 1, // Присваиваем уникальный идентификатор
          src: imageUrl, // URL изображения
          alt: `Зображення ${fileName}` // Альтернативный текст
        });
      });
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