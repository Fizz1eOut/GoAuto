<script>
import { defineComponent } from 'vue';
import AppLink from './AppLink.vue';
import AppDropdown from './AppDropdown.vue'
import IconArrow from './icons/IconArrow.vue'

export default defineComponent({
  name: 'AppNav',

  components: {
    AppLink,
    AppDropdown,
    IconArrow,

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
  <nav class="nav">
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
            :class="{ 'active': dropdownActive }"
            
          />
         <app-dropdown 
          :class="{ 'dropdown--active ': dropdownActive }"
         />
        </app-link>
      </li>

      <li class="nav__item">
        <app-link>
          Контакти
        </app-link>
      </li>
    </ul>
</nav>
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
</style>