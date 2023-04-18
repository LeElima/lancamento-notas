import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/HomePage.vue'
import Alunos from '../views/Alunos.vue'
import Notas from '../views/Notas.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/alunos',
    name: 'Alunos',
    component: Alunos,
  },
  {
    path: '/notas',
    name: 'Notas',
    component: Notas,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
