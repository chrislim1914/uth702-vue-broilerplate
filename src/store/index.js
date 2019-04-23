import Vue from 'vue'
import Vuex from 'vuex'

/**
 * modules import
 */
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    user
  }
})
