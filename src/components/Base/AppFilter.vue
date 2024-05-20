<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import AppUnderlay from '@/components/Base/AppUnderlay.vue';
import AppSubtitle from '@/components/Base/AppSubtitle.vue';
import IconFilter from '@/components/icons/IconFilter.vue';
import IconCross from '@/components/icons/IconCross.vue';
import AppDivider from '@/components/Base/AppDivider.vue';
import AppButton from '@/components/Base/AppButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFilter',

  components: {
    AppContainer,
    AppUnderlay,
    AppSubtitle,
    IconFilter,
    IconCross,
    AppDivider,
    AppButton,
  },

  emits: ['change', 'update:modelValue'],
  
  data() {
    return {
      active: false,
      isMobile: false,
      mediaQueryList: window.matchMedia('(max-width: 768px)')
    };
  },

  watch: {
    active(value) {
      document.body.style.overflow = value ? 'hidden' : '';
    }
  },

  mounted() {
    // Подписываемся на событие изменения медиазапроса при монтировании компонента
    this.isMobile = this.mediaQueryList.matches; // Инициализация значения isMobile при монтировании компонента
    this.mediaQueryList.addEventListener('change', this.handleMediaChange);
  },

  beforeUnmount() {
    // Отписываемся от события изменения медиазапроса при размонтировании компонента
    this.mediaQueryList.removeEventListener('change', this.handleMediaChange);
  },

  methods: {
    openFilter() {
      this.active = true;
    },
    closeFilter() {
      this.active = false;
    },
    // Обработчик изменения состояния медиазапроса
    handleMediaChange(event) {
      // Обновляем флаг isMobile в соответствии с состоянием медиазапроса
      this.isMobile = event.matches;
    }
  }
  
});
</script>

<template>
  <app-underlay v-if="!isMobile" class="underlay">
    <app-container>
      <div class="filter">
        <div class="filter__body">
          <app-subtitle>
            Фільтри
          </app-subtitle>

          <div class="filter__items">
            <slot />
          </div>
        </div>
      </div>
    </app-container>
  </app-underlay>

  <div v-if="isMobile" class="filter-mobile">
    <button 
      class="filter-mobile__button"
      @click="openFilter"
    >
      <IconFilter class="icon-filter" />
      <h3 class="filter-mobile__title">Фільтри</h3>
    </button>


    <Transition>
      <div v-if="active" class="filter-mobile__body">
        <app-container>
          <div class="filter-mobile__row">
            <h3 class="filter-mobile__subtitle">Фільтри</h3>
            <icon-cross class="cross" @click="closeFilter" />
          </div>
        </app-container>

        <app-divider class="divider" />

        <div class="filter-mobile__items">
          <app-container size="sm">
            <slot />
            <app-button class="button" @click="closeFilter">Закрити</app-button>
          </app-container>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
  .button {
    margin-top: 20px;
  }
  .filter {
    width: 300px;
  }
  .filter__body {
    margin-top: 14px;
  }
  .filter__body> *:not(:last-child) {
    margin-bottom: 30px;
  }
  .filter__content {
    margin-top: 20px;
  }
  .filter__content> *:not(:last-child) {
    margin-bottom: 10px;
  }
  .filter__price {
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }
  .filter-mobile__body {
    position: fixed;
    left: 0;
    top: 0px;
    max-width: 480px;
    width: 100%;
    height: 100%;
    z-index: 11;
    box-shadow: 4px 0 9px -7px rgba(0, 0, 0, 0.8);
    background-color: var(--color-white);
    overflow-x: hidden;
    overflow-y: auto;
  }
  .filter-mobile__button {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: var(--color-white);
    cursor: pointer;
  }
  .icon-filter {
    width: 20px;
    height: 20px;
  }
  .filter-mobile__title {
    font-weight: 400;
    font-size: 20px;
    color: var(--color-black);
  }
  .cross {
    width: 20px;
    height: 20px;
  }
  .filter-mobile__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }
  .filter-mobile__subtitle {
    font-weight: 600;
    font-size: 18px;
    color: var(--color-black);
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.7s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>