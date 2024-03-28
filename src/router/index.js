import { createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/pages/HomeView.vue';
import CartView from '@/pages/CartView.vue';
import ProcessedView from '@/pages/ProcessedView.vue';
import TiresView from '@/pages/TiresView.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView, name: 'HomeView'},
    { path: '/cart', component: CartView, name: 'CartView'},
    { path: '/processed', component: ProcessedView, name: 'ProcessedView'},
    { path: '/tires', component: TiresView, name: 'TiresView'},
  ]
});