<script>
import AppContact from '@/components/Base/AppContact.vue';
import AppSchedule from '@/components/Base/AppSchedule.vue';
import AppSocialMedia from '@/components/Base/AppSocialMedia.vue';
import AppUnderlay from '@/components/Base/AppUnderlay.vue';
import AppContainer from '@/components/Base/AppContainer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheContacts',

  components: {
    AppContact,
    AppSchedule,
    AppSocialMedia,
    AppUnderlay,
    AppContainer
  },
});
</script>

<template>
  <app-underlay>
    <app-container size="md">
      <div class="information">
        <div class="information__item">
          <h3 class="information__title">Де ми знаходимось:</h3>
          <p class="information__text">Україна, м. Київ, вулиця Промислова 1, метро "Видубичі" (гаражний кооператив "Енергетик 2" - 379 бокс)</p>
        </div>

        <div class="information__item">
          <h3 class="information__title">Телефони:</h3>
          <app-contact format="full" />
        </div>

        <div class="information__item">
          <app-social-media class="information__title" />
        </div>

        <div class="information__item">
          <h3 class="information__title">Графік роботи:</h3>
          <app-schedule class="information__text" />
        </div>
      </div>
    </app-container>
  </app-underlay>
</template>

<style scoped>
  .information {
  }
  .information__item:not(:last-child) {
    margin-bottom: 30px;
  }
  .information__item> *:not(:last-child) {
    margin-bottom: 10px;
  }
  .information__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: var(--color-black);
  }
  .information__text {
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: var(--color-black);
  }
</style>