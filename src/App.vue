<script>
import { defineComponent } from 'vue';
import AppHeader from '@/components/Base/AppHeader.vue';
import AppContainer from '@/components/Base/AppContainer.vue';


export default defineComponent({
  components: {
    AppHeader,
    AppContainer,
  },
});
</script>

<template>
  <app-header 

  />

  <main>
    <app-container>
      <router-view />
    </app-container>

  </main>

  <footer>

  </footer>
</template>

<style scoped>

</style>
