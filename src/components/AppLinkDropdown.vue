<script>
import { defineComponent } from 'vue';
import AppLink from './AppLink.vue';

export default defineComponent({
  components: {
    AppLink,
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
  <a href="" class="link dropdown">
    <slot></slot>
    <ul class="dropdown-list">
      <li class="dropdown-list__item">
        <app-link>
          Головна
        </app-link>
      </li>

      <li class="dropdown-list__item">
        <app-link>
          Головна
        </app-link>
      </li>

      <li class="dropdown-list__item">
        <app-link>
          Головна
        </app-link>
      </li>
    </ul>
  </a>
</template>

<style scoped>

</style>