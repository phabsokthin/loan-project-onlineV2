import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/client/HomeView.vue';
import AboutView from '@/view/client/AboutView.vue';
import ProfileView from '@/view/client/ProfileView.vue';
import WalletView from '@/view/client/WalletView.vue';
import LoanView from '@/view/client/LoanView.vue';
import RegisterAuth from '@/view/authentication/RegisterAuth.vue';
import LoginAuth from '@/view/authentication/LoginAuth.vue';
import Personal_InforView from '@/view/client/Personal_InforView.vue';
import BaneficicaryView from '@/view/client/BaneficicaryView.vue';
import LoancontractView from '@/view/client/LoancontractView.vue';
import IdentificationView from '@/view/client/IdentificationView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/wallet', name: 'wallet', component: WalletView },
  { path: '/loan', name: 'loan', component: LoanView },
  { path: '/register', name: 'register', component: RegisterAuth },
  { path: '/login', name: 'login', component: LoginAuth },
  {
    path: '/personal', name: 'personal', component: Personal_InforView,

    props: (route) => ({
      data: JSON.parse(route.query.data),
    })

  },
  {
    path: '/baneficicary', name: 'baneficicary', component: BaneficicaryView,

    props: (route) => ({
      data: JSON.parse(route.query.data),
    })
  },
  {
    path: '/loancontect', name: 'loancontect', component: LoancontractView,

    props: (route) => ({
      data: JSON.parse(route.query.data),})
  },
  {
    path: '/identification', name: 'identification', component: IdentificationView,

    props: (route) => ({
      data: JSON.parse(route.query.data),
    })
  }


];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to) {
    if (to.hash) {
      return {
      
        el: to.hash,
        behavior: 'smooth', // Optional for smooth scrolling
      }
    }
    else{
      return {
        top: 0
      }
    }
  },
});

export default router;
