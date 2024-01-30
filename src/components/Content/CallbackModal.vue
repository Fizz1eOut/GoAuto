<script>
import { defineComponent } from 'vue';
import AppModal from '@/components/Base/AppModal.vue';
import ContentModal from '@/components/Content/ContentModal.vue';

export default defineComponent({
  name: 'CallbackModal',

  components: {
    AppModal,
    ContentModal,
  },
});
</script>

<template>
  <app-modal>
    <content-modal />
  </app-modal>
</template>

<style scoped>

</style>