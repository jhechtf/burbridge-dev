import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  router,
  /* eslint-disable-next-line */
  render(h) {
    return h(App);
  }
}).$mount('#app');
