<script>
import { defineComponent } from 'vue';
import AppLink from './AppLink.vue';

export default defineComponent({
  name: 'dropDown',

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
</template>

<style scoped>
.dropdown-list {

}
.dropdown-list__item {

}
</style>