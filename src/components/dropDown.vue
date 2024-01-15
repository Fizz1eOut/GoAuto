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
      dropdownActive: false,
    }
  },
  methods: {
    
  }
});
</script>

<template>
  <div class="dropdown">
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
  </div>
</template>

<style scoped>
/* .dropdown {
  position: absolute;
  left: 0;
  z-index: 2;
  top: 100%;
  width: 100%;
  background-color: var(--color-white);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}
.dropdown--active {
    opacity: 1;
    visibility: visible;
    box-shadow: 0px 0px 10px 1px rgba(95, 95, 95, 0.25);
} */
.dropdown-list {

}
.dropdown-list__item {

}
</style>