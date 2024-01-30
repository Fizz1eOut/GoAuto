<script>
import { defineComponent } from 'vue';
import AppLink from '@/components/Base/AppLink.vue';
import linkNumber from '@/components/Content/linkNumber.vue';
import AppDropdown from '@/components/Base/AppDropdown.vue';
import IconArrow from '@/components/icons/IconArrow.vue';
import AppDropdownItem from '@/components/Base/AppDropdownItem.vue';
import AppSchedule from '@/components/Base/AppSchedule.vue';
import AppSocialMedia from '@/components/Base/AppSocialMedia.vue';

export default defineComponent({
  name: 'NavMobile',

  props: {
    open: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  
  components: {
    AppLink,
    AppDropdown,
    IconArrow,
    AppDropdownItem,
    linkNumber,
    AppSchedule,
    AppSocialMedia,
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
  <Transition>
    <nav
      v-if="open" 
      class="nav-modile" 
    >
    <ul class="nav-modile__list">
      <li class="nav-modile__item">
        <app-link>
          Головна
        </app-link>
      </li>

      <li class="nav-modile__item">
        <app-link>
          Шини
        </app-link>
      </li>

      <li class="nav-modile__item">
        <app-link>
          Диски
        </app-link>
      </li>

      <li class="nav-modile__item">
        <app-link>
          Доставка та оплата
        </app-link>
      </li>

      <li class="nav-modile__item">
        <app-link 
          @click="toggle"
        >
          Клієнтам 
          <icon-arrow :class="{ 'active': dropdownActive }"/>

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

      <li class="nav-modile__item">
        <app-link>
          Контакти
        </app-link>
      </li>

      <link-number>
        <app-schedule />
      </link-number>

      <app-social-media />
    </ul>
  </nav>
  </Transition>
</template>

<style scoped>
.arrow {
  margin-bottom: 2px;
  transition: transform 0.3s ease-in-out, fill 0.3s ease-in-out
}
.active {
  transform: rotate(180deg);
}
.nav-modile {
  max-width: 600px;
  width: 100%;
}
.nav-modile__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.nav-modile__item {
  position: relative;
}
.nav-mobile__schedule {
  margin-bottom: 30px;
  color: var(--color-grey);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}
@media (max-width: 991px) {
  .nav-modile {
    position: fixed;
    left: 0;
    top: 82px;
    max-width: 991px;
    width: 100%;
    height: 100vh;
    z-index: 9;
    box-shadow: 4px 0 9px -7px rgba(0,0,0, 0.8);
    background-color: var(--color-white);
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  .nav-modile__list {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 15px;
    position: relative;
    padding: 30px 20px 0;
  }
  
  .nav-modile__item {
    width: 100%;
    /* position: static; */
  }
  .nav-modile__item .link {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .nav-modile__item .dropdown {
    left: 0px;
  }


  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.9s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>