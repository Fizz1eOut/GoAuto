<script>
import { Splide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppSlider',

  components: {
    Splide,
    SplideTrack,
  },
  
  data() {
    return {
      slideOptions: {
        type: 'slide',
        pagination: true,
        arrows: false,
        paginationKeyboard: true,
        gap: "10px",
        perPage: 4,
        breakpoints: {
          1028: {
            perPage: 3,
          },
          780: {
            perPage: 2,
          },
          525: {
            perPage: 1,
          },
        }
      },
    }
  },
});
</script>

<template>
  <div class="slider">
    <div class="slider__body">
      <Splide 
        :options="slideOptions" 
        :has-track="false" 
      >
        <SplideTrack>
          <slot />
        </SplideTrack>
      </Splide>
    </div>
  </div>
</template>

<style>
  .slider {
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
  @media (max-width: 768px) {
      .slider__body {
      margin-top: 40px;
    }
  }
</style>