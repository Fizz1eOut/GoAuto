<script>
import AppTitle from '@/components/Base/AppTitle.vue';
import ContactsInfo from '@/components/Content/ContactsInfo.vue';
import TheMap from '@/components/Content/TheMap.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheContacts',

  components: {
    AppTitle,
    ContactsInfo,
    TheMap
  },
});
</script>

<template>
  <div class="contacts">
    <app-title>Контакти</app-title>

    <div class="contacts__body">
      <contacts-info />

      <the-map class="contacts-map" />
    </div>
  </div>
</template>

<style scoped>
  .contacts {
    margin-top: 15px;
  }
  .contacts__body {
    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }
  .contacts-map {
    width: 100%;
    height: 400px;
  }
  @media (max-width: 768px) {
    .contacts__body {
      flex-direction: column;
      row-gap: 20px;
    }
  }
</style>