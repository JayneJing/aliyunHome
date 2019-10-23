import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

import HomePage from './modules/home-page'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    HomePage,
  }
})
