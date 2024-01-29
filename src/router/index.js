import { createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/pages/HomeView.vue';
import CartView from '@/pages/CartView.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView, name: 'HomeView'},
    { path: '/CartView', component: CartView, name: 'CartView'},
  ]
});