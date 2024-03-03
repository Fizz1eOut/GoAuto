<script>
import AppProduct from '@/components/Base/AppProduct.vue'
import AppTitle from '@/components/Base/AppTitle.vue'
import { Splide, SplideSlide, SplideTrack} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppSlider',

  components: {
    Splide,
    SplideSlide,
    SplideTrack,
    AppTitle,
    AppProduct,
  },
  
  data() {
    return {
      slideOptions: {
        type: 'slide',
        pagination: true,
        arrows: false,
        paginationKeyboard: true,
        perPage: 4,
        breakpoints: {
          640: {
            perPage: 2,
          },
        }
      },
    }
  },
});
</script>

<template>
  <div class="slider">
    <app-title>
      Рекомендовані товари
    </app-title>

    <div class="slider__body">
      <Splide 
        :options="slideOptions" 
        :has-track="false" 
      >
        <SplideTrack>
          <SplideSlide>
            <app-product 
              image-url="https://www.oponeo.pl/Temp/michelin-pilot-alpin-5-suv-18806-234724-f-f-l600-sk3.webp"
              title="Michelin X-Ice Snow"
              article="MXIS001"
              stock="В наявності"
              price="4 900"
            />
          </SplideSlide>

          <SplideSlide>
            <app-product 
              image-url="https://www.oponeo.pl/Temp/michelin-pilot-alpin-5-suv-18806-234724-f-f-l600-sk3.webp"
              title="Michelin X-Ice Snow"
              article="MXIS001"
              stock="В наявності"
              price="4 900"
            />
          </SplideSlide>
          <SplideSlide>
            <app-product 
              image-url="https://www.oponeo.pl/Temp/michelin-pilot-alpin-5-suv-18806-234724-f-f-l600-sk3.webp"
              title="Michelin X-Ice Snow"
              article="MXIS001"
              stock="В наявності"
              price="4 900"
            />
          </SplideSlide>

          <SplideSlide>
            <app-product 
              image-url="https://www.oponeo.pl/Temp/michelin-pilot-alpin-5-suv-18806-234724-f-f-l600-sk3.webp"
              title="Michelin X-Ice Snow"
              article="MXIS001"
              stock="В наявності"
              price="4 900"
            />
          </SplideSlide>

          <SplideSlide>
            <app-product 
              image-url="https://www.oponeo.pl/Temp/michelin-pilot-alpin-5-suv-18806-234724-f-f-l600-sk3.webp"
              title="Michelin X-Ice Snow"
              article="MXIS001"
              stock="В наявності"
              price="4 900"
            />
          </SplideSlide>

          <SplideSlide>
            <app-product 
              image-url="https://www.oponeo.pl/Temp/michelin-pilot-alpin-5-suv-18806-234724-f-f-l600-sk3.webp"
              title="Michelin X-Ice Snow"
              article="MXIS001"
              stock="В наявності"
              price="4 900"
            />
          </SplideSlide>

          <SplideSlide>
            <app-product 
              image-url="https://www.oponeo.pl/Temp/michelin-pilot-alpin-5-suv-18806-234724-f-f-l600-sk3.webp"
              title="Michelin X-Ice Snow"
              article="MXIS001"
              stock="В наявності"
              price="4 900"
            />
          </SplideSlide>

          <SplideSlide>
            <app-product 
              image-url="https://www.oponeo.pl/Temp/michelin-pilot-alpin-5-suv-18806-234724-f-f-l600-sk3.webp"
              title="Michelin X-Ice Snow"
              article="MXIS001"
              stock="В наявності"
              price="4 900"
            />
          </SplideSlide>

          <SplideSlide>
            <app-product 
              image-url="https://www.oponeo.pl/Temp/michelin-pilot-alpin-5-suv-18806-234724-f-f-l600-sk3.webp"
              title="Michelin X-Ice Snow"
              article="MXIS001"
              stock="В наявності"
              price="4 900"
            />
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </div>
  </div>
</template>

<style>
  .slider {
    margin-top: 120px;
  }
  .slider__body {
    margin-top: 60px;
  }
  .slider__body .splide__pagination {
    bottom: -50px;
  }
  .splide__pagination {
    gap: 10px;
  }
  .slider__body .splide__pagination .splide__pagination__page {
    background-color: var(--color-grey);
  }

  .slider__body .splide__pagination .splide__pagination__page.is-active {
    background-color: var(--color-blue);
  }
</style>