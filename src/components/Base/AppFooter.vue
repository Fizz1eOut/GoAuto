<script>
import AppContact from '@/components/Base/AppContact.vue';
import AppContainer from '@/components/Base/AppContainer.vue';
import AppDivider from '@/components/Base/AppDivider.vue'
import AppLink from '@/components/Base/AppLink.vue';
import AppLogo from '@/components/Base/AppLogo.vue'
import AppSchedule from '@/components/Base/AppSchedule.vue';
import AppSocialMedia from '@/components/Base/AppSocialMedia.vue';
import FooterCopyright from '@/components/Content/FooterCopyright.vue'
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AppFooter',

    components: {
    AppContainer,
    AppDivider,
    AppLogo,
    AppContact,
    AppSchedule,
    AppSocialMedia,
    AppLink,
    FooterCopyright,
},
});
</script>

<template>
  <footer class="footer">
    <app-container>
      <app-divider />

      <div class="footer__body">
        <div class="footer__content">
          <app-logo />

          <app-contact>
            <app-schedule />
          </app-contact>

          <app-social-media />
        </div>

        <div class="footer__items">
          <ul class="footer__list">
            <h2 class="title">Меню</h2>
            
            <li class="footer__item">
              <router-link to="/">
                <app-link>
                  Головна
                </app-link>
              </router-link>
            </li>

            <li class="footer__item">
              <router-link to="/tires">
                <app-link>
                  Шини
                </app-link>
              </router-link>
            </li>

            <li class="footer__item">
              <router-link to="/rims">
                <app-link>
                  Диски
                </app-link>
              </router-link>
            </li>
          </ul>

          <ul class="footer__list">
            <h2 class="title">Користувачам</h2>
            
            <li class="footer__item">
              <app-link>
                Доставка та оплата
              </app-link>
            </li>

            <li class="footer__item">
              <app-link>
                Консультація
              </app-link>
            </li>
          </ul>

          <ul class="footer__list">
            <h2 class="title">Компанія</h2>
            
            <li class="footer__item">
              <router-link to="/contacts">
                <app-link>
                  Контакти
                </app-link>
              </router-link>
            </li>

            <li class="footer__item">
              <router-link to="/tire-service">
                <app-link>
                  Шиномонтаж
                </app-link>
              </router-link>
            </li>

            <li class="footer__item">
              <app-link>
                Фарбування дисків
              </app-link>
            </li>
          </ul>
        </div>
      </div>
      <footer-copyright />
    </app-container>
  </footer>
</template>

<style scoped>
  .footer {
    margin-top: 40px;
  }
  .footer__body {
    padding-top: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }
  .footer__content {
    width: 50%;
  }
  .footer__content> *:not(:last-child) {
    margin-bottom: 20px;
  }
  .footer__content> *:first-child {
    margin-top: 10px;
  }
  .footer__items {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    width: 640px;
  }
  .title {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: var(--color-black);
    margin-bottom: 20px;
  }
  .footer__item:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {

    .footer__body {
      flex-wrap: wrap;
      row-gap: 20px;
    }
    .footer__items {
      flex-wrap: wrap;
      width: 100%;
      row-gap: 20px;
    }
  }
</style>
