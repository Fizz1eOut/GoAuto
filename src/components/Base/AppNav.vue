<script>
import { defineComponent } from 'vue';
import AppLink from '@/components/Base/AppLink.vue';
import AppDropdown from '@/components/Base/AppDropdown.vue';
import IconArrow from '../icons/IconArrow.vue';
import AppDropdownItem from '@/components/Base/AppDropdownItem.vue';

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
            :class="{ 'active': dropdownActive }"
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
.arrow {
  margin-bottom: 2px;
  transition: transform 0.3s ease-in-out, fill 0.3s ease-in-out
}
.active {
  transform: rotate(180deg);
}
.nav {
  max-width: 580px;
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
  .nav {
    display: none;
  }
}
</style>