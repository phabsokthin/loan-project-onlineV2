import { createRouter, createWebHistory } from 'vue-router';
import AdminHome from '@/view/admin/AdminHome.vue';
import DashBoard from '@/view/admin/DashBoard.vue';
import TestAdmin from '@/view/admin/TestAdmin.vue';

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminHome,
    children: [
      { path: '/admin', name: "dashboard", component: DashBoard },
      { path: '/admin', name: "test", component: TestAdmin },

    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'bg-gray-100 h-10 hover:text-black',
});



export default router;
