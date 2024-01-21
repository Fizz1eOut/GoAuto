<script>
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue';


export default defineComponent({
  components: {
    AppHeader,
  },
});
</script>

<template>
  <app-header 

  />

  <main>
    <router-view />
  </main>

  <footer>

  </footer>
</template>

<style scoped>

</style>
