<script>
import { defineComponent } from 'vue';
import AppLink from './AppLink.vue';
import dropDown from './dropDown.vue'

export default defineComponent({
  name: 'AppNav',

  components: {
    AppLink,
    dropDown,
  },
  data() {
    return {

    }
  },
  methods: {

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

        <app-link>
          Клієнтам <span>svg-arrow</span>
          <drop-down />
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
</style>