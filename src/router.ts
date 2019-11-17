import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const $originalTitle = document.title;

const router = new Router({
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    }
  ]
});

router.beforeEach((to,from,next)=> {
  // We can set the title dynamically, almost as if this was a whole other page
  if(to.meta.title) {
    document.title = [$originalTitle, to.meta.title].join(' | ');
  }
  next();
});

export default router;
