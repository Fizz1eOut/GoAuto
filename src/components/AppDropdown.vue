<script>
import { defineComponent } from 'vue';
import AppDropdownItem from './AppDropdownItem.vue';

export default defineComponent({
  name: 'AppDropdown',

  components: {
    AppDropdownItem,
  },

  props: {
    dropdownActive: {
      type: Boolean,
      required: false,
      default: false
    },
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
  <div 
    :class="{ 'dropdown--active': dropdownActive }"
    class="dropdown"
  >
    <ul class="dropdown-list">
      <AppDropdownItem>
        <slot></slot>
      </AppDropdownItem>
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
</style>