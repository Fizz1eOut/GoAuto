<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import AppDivider from '@/components/Base/AppDivider.vue';
import IconCross from '@/components/icons/IconCross.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterMobile',

  components: {
    IconCross,
    AppContainer,
    AppDivider
  },

  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  emits: ['update:modelValue'],

  methods: {
    close() {
      this.$emit('update:modelValue', false);
    },
  }
});
</script>

<template>
  <Transition>
    <div v-if="modelValue" class="filter-mobile">
      <app-container>
        <div class="filter-mobile__row">
          <h3 class="filter-mobile__title">Фільтри</h3>
          <icon-cross class="cross" @click="close" />
        </div>
      </app-container>

      <app-divider class="divider" />

      <div class="filter-mobile__body">
        <app-container size="sm">
          <slot />
        </app-container>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  .filter-mobile {
    position: fixed;
    left: 0;
    top: 0px;
    max-width: 480px;
    width: 100%;
    height: 100vh;
    z-index: 11;
    box-shadow: 4px 0 9px -7px rgba(0, 0, 0, 0.8);
    background-color: var(--color-white);
    overflow-x: hidden;
    overflow-y: auto;
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
  .filter-mobile__title {
    font-weight: 600;
    font-size: 18px;
    color: var(--color-black);
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.6s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>