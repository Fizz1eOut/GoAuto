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

  async mounted() {
    // Получаем все файлы из папки '../../assets/images/our-products/' с расширением '.svg'
    const imageFiles = import.meta.glob('../../assets/images/our-products/*.svg');
    // console.log(imageFiles)
    // Загружаем все изображения асинхронно и ждем их завершения
    const imageUrls = await Promise.all(
      // Преобразуем объект файлов в массив пар ключ-значение и выполняем операции для каждой пары
      Object.entries(imageFiles).map(async ([path, loader]) => {
        console.log(path)
        console.log(loader)
        // Загружаем модуль изображения и ожидаем его завершения
        const module = await loader();
        // console.log(module)
        // Возвращаем объект с путем к файлу и его URL
        return { path, url: module.default };
      })
    );
    // Преобразуем полученные URL в формат для отображения и сохраняем в массив images
    this.images = imageUrls.map(({ url }, index) => ({
      id: index + 1, // Идентификатор изображения
      src: url, // URL изображения
      alt: `Зображення ${index + 1}`, // Альтернативный текст изображения
    }));
    // console.log(imageUrls);
    // console.log(this.images);
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