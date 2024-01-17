<script>
import { defineComponent } from 'vue';
import AppLink from './AppLink.vue';
import AppDropdown from './AppDropdown.vue';
import IconArrow from './icons/IconArrow.vue';
import AppDropdownItem from './AppDropdownItem.vue';

export default defineComponent({
  name: 'AppNav',

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