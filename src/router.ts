import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const $originalTitle = document.title;

const router = new Router({
  mode: 'hash',
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
    },
    {
      path: '/contact-me',
      name: 'contact',
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      component: () => import(/* webpackChunkName: "contact" */'./views/Contact.vue'),
      meta: {
        title: 'Contact Me'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  // We can set the title dynamically, almost as if this was a whole other page
  if (to.meta.title) {
    document.title = [$originalTitle, to.meta.title].join(' | ');
  }
  next();
});

export default router;
