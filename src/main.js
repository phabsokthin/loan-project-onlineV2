import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import clientRoute from '@/routes/clientRoute'
import adminRoute from '@/routes/adminRoute'

import { MotionPlugin } from '@vueuse/motion'

const path = window.location.pathname.split('/')[1];

let routes;

if(path === 'admin'){
    routes = adminRoute;
}
else{
    routes = clientRoute;
}

createApp(App).use(routes).use(MotionPlugin).mount('#app')
