import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import SignUp from './pages/SignUp.vue';
import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import { auth } from './firebaseConfig'

Vue.use(Router);

const routes =
  [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/signup',
      name: 'signup',
      components: { default: SignUp, header: MainNavbar },
      props: {
        header: { colorOnScroll: 20 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 20 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        requiresAuth: true
      }
    }
  ]

const router = new Router({
  linkExactActiveClass: 'active',
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = auth.currentUser

  if (requiresAuth && !currentUser) {
    next('/')
  } else {
    next()
  }
})

export default router
