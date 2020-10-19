import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes : [
    { path: '/',name: 'Home',component: Home},
    { path: '/questionnaire',name: 'questionnaire',component: () => import('../views/questionnaire.vue')}
  ]
})
