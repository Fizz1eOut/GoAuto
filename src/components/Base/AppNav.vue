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
        <router-link to="/">
          <app-link>
            Головна
          </app-link>
        </router-link>
      </li>

      <li class="nav__item">
        <router-link to="/tires">
          <app-link>
            Шини
          </app-link>
        </router-link>
      </li>

      <li class="nav__item">
        <router-link to="/rims">
          <app-link>
            Диски
          </app-link>
        </router-link>
      </li>

      <li class="nav__item">
        <router-link to="/delivery-payment">
          <app-link>
            Доставка та оплата
          </app-link>
        </router-link>
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
            <router-link to="/tire-service">
              <app-dropdown-item class="dropdown-link">
                Шиномонтаж
              </app-dropdown-item>
            </router-link>

            <router-link to="/rims-painting">
              <app-dropdown-item>
                Фарбування дисків
              </app-dropdown-item>
            </router-link>
          </app-dropdown>
        </app-link>
      </li>

      <li class="nav__item">
        <router-link to="/contacts">
          <app-link>
            Контакти
          </app-link>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .dropdown-link {
    margin-bottom: 10px;
  }
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