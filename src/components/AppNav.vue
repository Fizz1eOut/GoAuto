<script>
import { defineComponent } from 'vue';
import AppLink from './AppLink.vue';
import AppDropdown from './AppDropdown.vue';
import IconArrow from './icons/IconArrow.vue';
import AppDropdownItem from './AppDropdownItem.vue';

export default defineComponent({
  name: 'AppNav',

  props: {
    open: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  components: {
    AppLink,
    AppDropdown,
    IconArrow,
    AppDropdownItem,
  },
  data() {
    return {
      dropdownActive: false,
    }
  },
  methods: {
    toggle() {
      this.dropdownActive = !this.dropdownActive;
    },
  }
});
</script>

<template>
  <Transition>
    <nav
      v-if="open" 
      class="nav" 
    >
    <ul class="nav__list">
      <li class="nav__item">
        <app-link>
          Головна
        </app-link>
      </li>

      <li class="nav__item">
        <app-link>
          Шини
        </app-link>
      </li>

      <li class="nav__item">
        <app-link>
          Диски
        </app-link>
      </li>

      <li class="nav__item">
        <app-link>
          Доставка та оплата
        </app-link>
      </li>

      <li class="nav__item">
        <app-link 
          @click="toggle"
        >
          Клієнтам 
          <icon-arrow 
            :dropdownActive="dropdownActive"
          />
         <app-dropdown 
          :dropdownActive="dropdownActive"
         >
          <app-dropdown-item>
            Шиномонтаж
          </app-dropdown-item>

          <app-dropdown-item>
            Фарбування дисків
          </app-dropdown-item>
         </app-dropdown>
        </app-link>
      </li>

      <li class="nav__item">
        <app-link>
          Контакти
        </app-link>
      </li>
    </ul>
  </nav>
  </Transition>
  <Transition>
    <div v-if="open" class="overlay"></div>
  </Transition>
</template>

<style scoped>
.nav {
  max-width: 600px;
  width: 100%;
}
.nav__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.nav__item {
  position: relative;
}

@media (max-width: 991px) {
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.5);
    z-index: 8;
  }

  .nav {
    position: fixed;
    left: 0;
    top: 0;
    max-width: 400px;
    width: 80%;
    height: 100vh;
    z-index: 9;
    box-shadow: 4px 0 9px -7px rgba(0,0,0, 0.8);
    background-color: var(--color-white);
    /* transform: translateX(-150vw); */
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  .nav__list {
    margin-top: 30px;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 0 20px;
  }
  
  .nav__item {
    width: 100%;
    position: static;
  }
  .v-enter-active,
.v-leave-active {
  transition: opacity 0.9s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
}
</style>