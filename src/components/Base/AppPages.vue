<script>
import PagesItem from '@/components/Content/PagesItem.vue'
import AppLink from '@/components/Base/AppLink.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppPages',

  components: {
    PagesItem,
    AppLink,
    IconArrowRight,
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
  <div class="pages">
    <div class="pages__items">
      <pages-item>
        <router-link to="/">
          <app-link>
            Головна
          </app-link>
        </router-link>
      </pages-item>

      <pages-item>
        <icon-arrow-right class="icon-arrow" />
      </pages-item>

      <pages-item>
        <router-link to="/cart">
          <app-link class="active-link">
            Кошик
          </app-link>
        </router-link>
      </pages-item>
    </div>
  </div>
</template>

<style scoped>
  .pages {

  }
  .pages__items {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .active-link {
    color: var(--color-grey);
  }
  .icon-arrow {
    width: 6px;
    height: 6px;
    fill: var(--color-green);
  }
</style>
