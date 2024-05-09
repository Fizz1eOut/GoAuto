<script>
import AppBreadcrumbs from '@/components/Base/AppBreadcrumbs.vue';
import BreadcrumbItem from '@/components/Content/BreadcrumbItem.vue';
import AppLink from '@/components/Base/AppLink.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import ServiceTerms from '@/components/Content/ServiceTerms.vue';
import ServiceTermsItem from '@/components/Content/ServiceTermsItem.vue'
import { defineComponent } from 'vue';
import AppTitle from '@/components/Base/AppTitle.vue';

export default defineComponent({
  name: 'DeliveryPaymentView',

  components: {
    AppBreadcrumbs,
    BreadcrumbItem,
    AppLink,
    IconArrowRight,
    ServiceTerms,
    AppTitle,
    ServiceTermsItem
}
});
</script>

<template>
  <app-breadcrumbs>
    <breadcrumb-item>
      <router-link to="/">
        <app-link>
          Головна
        </app-link>
      </router-link>
    </breadcrumb-item>

    <breadcrumb-item>
      <icon-arrow-right class="icon-arrow" />
    </breadcrumb-item>

    <breadcrumb-item>
      <router-link to="/delivery-payment">
        <app-link class="active-link">
          Доставка та оплата
        </app-link>
      </router-link>
    </breadcrumb-item>
  </app-breadcrumbs>

  <service-terms>
    <template #title>
      <app-title>
        Способи доставки
      </app-title>
    </template>

    <service-terms-item>
      <template #subtitle>
        Самовивіз.
      </template>

      <template #text>
        м. Київ, вулиця Промислова 1, метро "Видубичі", гаражний кооператив "Енергетик 2", бокс 379;
      </template>
    </service-terms-item>

    <service-terms-item>
      <template #subtitle>
        Доставка кур'єром по Києву.
      </template>

      <template #text>
        вартість доставки обговорюється індивідуально для Києва;
      </template>
    </service-terms-item>

    <service-terms-item>
      <template #subtitle>
        Доставка по Україні Новою Поштою. 
      </template>

      <template #text>
        Можлива відправка товару без передоплати. Вартість доставки в середньому становить 250 грн за комплект дисків або гуми.
      </template>
    </service-terms-item>
  </service-terms>

  <service-terms>
    <template #title>
      <app-title>
        Способи оплати
      </app-title>
    </template>

    <service-terms-item>
      <template #subtitle>
        Оплата готівкою при самовивозі та кур'єрській доставці.
      </template>
    </service-terms-item>

    <service-terms-item>
      <template #subtitle>
        Оплата готівкою у відділенні “Нової Пошти”.
      </template>
    </service-terms-item>

    <service-terms-item>
      <template #subtitle>
        Оплата банківською картою Visa або MasterCard у відділенні "Нової Пошти".
      </template>
    </service-terms-item>
  </service-terms>
</template>

<style scoped>
  .active-link {
    color: var(--color-grey);
  }
  .icon-arrow {
    width: 6px;
    height: 6px;
    fill: var(--color-black);
  }
</style>