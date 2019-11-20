import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import list from '../views/list.vue'
import update from '../views/update.vue';
import register from '../views/register.vue';

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'home',component: Home}
  ,{path:'/list',name:'list',component:list}
  ,{path:'/update',name:'update',component:update}
  ,{path:'/register',name:'register',component:register}
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
