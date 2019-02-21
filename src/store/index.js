import Vue from 'vue'
import Vuex from 'vuex'

/**
 * modules import
 */
import employee from './modules/employee'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    employee
  }
})
