import { createRouter, createWebHistory} from 'vue-router';
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
  history: createWebHistory('/GoAuto'),
  routes: [
    { path: '/', component: HomeView, name: 'HomeView'},
    { path: '/cart', component: CartView, name: 'CartView'},
    { path: '/order-success', component: OrderSuccessView, name: 'OrderSuccessView'},
    { path: '/tires', component: TiresView, name: 'TiresView'},
    { path: '/rims', component: RimsView, name: 'RimsView'},
    { path: '/contacts', component: ContactsView, name: 'ContactsView'},
    { path: '/tire-service', component: TireServiceView, name: 'TireServiceView'},
    { path: '/rims-painting', component: RimsPaintingView, name: 'RimsPaintingView'},
    { path: '/delivery-payment', component: DeliveryPaymentView, name: 'DeliveryPaymentView'},
    { path: '/product/:alias', component: ProductDetailView, name: 'ProductDetailView'},
  ],

  scrollBehavior() {
    return { top: 0 }
  },
});