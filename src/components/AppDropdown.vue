<script>
import { defineComponent } from 'vue';
import AppDropdownLink from './AppDropdownLink.vue';

export default defineComponent({
  name: 'AppDropdown',

  components: {
    AppDropdownLink,
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
  <div class="dropdown" 

  >
    <ul class="dropdown-list">
      <li class="dropdown-list__item">
        <app-dropdown-link>
          Шиномонтаж
        </app-dropdown-link>
      </li>

      <li class="dropdown-list__item">
        <app-dropdown-link>
          Фарбування дисків
        </app-dropdown-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  position: absolute;
  left: -40px;
  z-index: 2;
  top: 100%;
  background-color: var(--color-white);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  border-radius: 8px;
  background: #F5F7FA;
  padding: 16px;
  width: 158px;
}
.dropdown--active {
    opacity: 1;
    visibility: visible;
    box-shadow: 0px 0px 10px 1px rgba(95, 95, 95, 0.25);
}
.dropdown-list {


}
.dropdown-list__item:not(:last-child) {
  margin-bottom: 16px;
} 

</style>