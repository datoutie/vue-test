'use strict'

import Vue from 'vue'
import App from "./pages/app.vue"

const app = new Vue({
    render: h => h(App)
}).$mount('#app')