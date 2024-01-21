<script>
import { defineComponent } from 'vue';
import AppSocialMediaItem from './AppSocialMediaItem.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconViber from './icons/IconViber.vue';
import IconTelegram from './icons/IconTelegram.vue'

export default defineComponent({
  name: 'AppSocialMedia',

  components: {
    AppSocialMediaItem,
    IconInstagram,
    IconViber,
    IconTelegram,
  },

});
</script>

<template>
  <div class="social-media">
    <div class="social-media__title">
      Ми у соц.мережах:
    </div>
    <ul class="social-media__list">
      <app-social-media-item>
        <icon-instagram />
      </app-social-media-item>

      <app-social-media-item>
        <icon-telegram />
      </app-social-media-item>

      <app-social-media-item>
        <icon-viber />
      </app-social-media-item>
    </ul>
  </div>
</template>

<style scoped>
.social-media__title {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: var(--color-black);
}
.social-media__list {
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>