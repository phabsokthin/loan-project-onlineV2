import { createRouter, createWebHistory } from 'vue-router';
import AdminHome from '@/view/admin/AdminHome.vue';
import DashBoard from '@/view/admin/DashBoard.vue';
import TestAdmin from '@/view/admin/TestAdmin.vue';
import CustomerView from '@/view/admin//CustomersView.vue';
import ViewCustomerDetail from '@/view/admin/ViewCustomerDetailView.vue'
import { projectAuth } from '@/config/config';
// import Login from '@/view/authentication/LoginAuth.vue';
import RegisterAuth from '@/view/authentication/AdminRegisterAuth.vue';
import LoginAuth from '@/view/authentication/AdminLoginAuth.vue'
import SlideView from '@/view/admin/SlidesView.vue'
import ViewAllMembers from '@/view/admin/AllMemberView.vue'
import ViewContract from '@/view/admin/ViewContractView.vue'
import WidthdrawalList from '@/view/admin/WithdrawalListView.vue'
import AdminRegisterAuth from '@/view/authentication/AdminRegisterAuth.vue';

const requiresAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (user) {
    next();
  }
  else {
    next({ name: 'login' })
  }
}

//if we loggin exist it show admin
const checkIfUserAlreadyLogin = (to, from, next) => {
  projectAuth.onAuthStateChanged((user) => {
    if (user) {
      next("/admin");
    } else {
      next();
    }
  });
};


const routes = [

  {
    path: '/login',
    name: 'login',
    component: LoginAuth,
    beforeEnter: checkIfUserAlreadyLogin
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterAuth,
    // beforeEnter: checkIfUserAlreadyLogin
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminHome,
    beforeEnter: requiresAuth,
    children: [
      { path: '/admin', name: "dashboard", component: DashBoard },
      { path: '/admin', name: "test", component: TestAdmin },
      { path: '/admin', name: "customers", component: CustomerView },
      { path: '/admin/:id', name: "viewCustomer", component: ViewCustomerDetail },
      { path: '/admin', name: "slide", component: SlideView },
      { path: '/admin', name: "viewAllMember", component: ViewAllMembers },
      { path: '/admin/:id', name: "viewContract", component: ViewContract },
      { path: '/admin', name: "withdrawal", component: WidthdrawalList },
      {path: '/admin', name: "adminRegister", component: AdminRegisterAuth },

      
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'bg-black/40 h-10 hover:text-black',
});



export default router;
