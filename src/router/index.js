import { createRouter, createWebHashHistory} from 'vue-router';
import HomeView from '@/pages/HomeView.vue';
import CartView from '@/pages/CartView.vue';
import OrderSuccessView from '@/pages/OrderSuccessView.vue';
import TiresView from '@/pages/TiresView.vue';
import RimsView from '@/pages/RimsView.vue';
import ContactsView from '@/pages/ContactsView.vue';
import TireServiceView from '@/pages/TireServiceView.vue';
import RimsPaintingView from '@/pages/RimsPaintingView.vue';
import DeliveryPaymentView from '@/pages/DeliveryPaymentView.vue';
import ProductDetailView from '@/pages/ProductDetailView.vue'

export const router = createRouter({
  // history: createWebHistory('/GoAuto'),
  history: createWebHashHistory('/GoAuto'),
  routes: [
    { path: '/', component: HomeView, name: 'HomeView',  meta: { title: 'Головна' } },
    { path: '/cart', component: CartView, name: 'CartView', meta: { title: 'Кошик' } },
    { path: '/order-success', component: OrderSuccessView, name: 'OrderSuccessView' },
    { path: '/tires', component: TiresView, name: 'TiresView', meta: { title: 'Шини' } },
    { path: '/rims', component: RimsView, name: 'RimsView', meta: { title: 'Диски' } },
    { path: '/contacts', component: ContactsView, name: 'ContactsView', meta: { title: 'Контакти' } },
    { path: '/tire-service', component: TireServiceView, name: 'TireServiceView', meta: { title: 'Шиномонтаж' } },
    { path: '/rims-painting', component: RimsPaintingView, name: 'RimsPaintingView', meta: { title: 'Фарбування дисків' } },
    { path: '/delivery-payment', component: DeliveryPaymentView, name: 'DeliveryPaymentView', meta: { title: 'Доставка та оплата' } },
    { path: '/product/:alias', component: ProductDetailView, name: 'ProductDetailView' },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.path !== from.path) {
      return { top: 0 };
    }
    return {};
  },
});