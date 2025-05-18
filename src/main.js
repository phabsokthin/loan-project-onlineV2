import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import clientRoute from '@/routes/clientRoute'
import adminRoute from '@/routes/adminRoute'

import { MotionPlugin } from '@vueuse/motion'
import { browserLocalPersistence, setPersistence } from 'firebase/auth'
import { projectAuth } from './config/config'

const path = window.location.pathname.split('/')[1];

let routes;

if (path === 'admin') {
    routes = adminRoute;
}
else {
    routes = clientRoute;
}

setPersistence(projectAuth, browserLocalPersistence).then(() => {
    createApp(App).use(routes).use(MotionPlugin).mount('#app')

})
.catch(err => {
    console.log(err)
})


