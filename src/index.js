'use strict'

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'material-design-icons/iconfont/material-icons.css'
import 'vuetify/dist/vuetify.min.css'
import Main from "./pages/main.vue"
import App from "./pages/app.vue"
import App2 from "./pages/test.vue"

Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [
    { path: '/app', component: App },
    { path: '/test', component: App2 }
  ]
const routera = new VueRouter({
    routes // （缩写）相当于 routes: routes
  })
const app = new Vue({
    router:routera,
    render: h => h(Main)
}).$mount('#app')