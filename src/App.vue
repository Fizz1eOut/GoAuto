<script>
import { defineComponent } from 'vue';
import AppHeader from '@/components/Base/AppHeader.vue';
import AppContainer from '@/components/Base/AppContainer.vue';
import AppFooter from '@/components/Base/AppFooter.vue';


export default defineComponent({
  components: {
    AppHeader,
    AppContainer,
    AppFooter
},
});
</script>

<template>
  <app-header />

  <main>
    <app-container>
      <router-view />
    </app-container>
  </main>

  <app-footer />
</template>

<style scoped>

</style>
