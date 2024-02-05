<script>
import AppContainer from '@/components/Base/AppContainer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AppDropdown',

    components: { 
      AppContainer,
    },

    props: {
      dropdownActive: {
          type: Boolean,
          required: false,
          default: false
      },
    },
});
</script>

<template>
  <Transition>
    <div v-if="dropdownActive" class="dropdown">
      <app-container>
        <ul class="dropdown-list">
          <slot />
        </ul>
      </app-container>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.dropdown {
  position: absolute;
  left: -40px;
  z-index: 2;
  top: 100%;
  background-color: var(--color-white);
  box-shadow: 0px 0px 10px 1px rgba(95, 95, 95, 0.25);
  border-radius: 8px;
  background: #F5F7FA;
  width: 158px;
}

</style>