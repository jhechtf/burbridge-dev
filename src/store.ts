import Vue from 'vue'
import Vuex from 'vuex'

import ResumeData from '@data/data';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...ResumeData
  },
  mutations: {

  },
  actions: {

  }
});