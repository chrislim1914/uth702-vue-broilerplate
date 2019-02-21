/**
 * Users store module
 */
import axios from 'axios'

import {
  employee
} from '@/api'

/**
 * @const state
 * @type {object}
 */
const state = {
  employee: {},
  responseData: {}
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  signinEmployee: async (context, payload) => {
    try {
      var resp = await axios.post(employee.signin, payload)
      context.commit('updateResponseData', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  },
  signupEmployee: async (context, payload) => {
    try {
      var resp = await axios.post(employee.signup, payload)
      context.commit('updateResponseData', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  },
  retrieveEmployeeInfo: async (context, payload) => {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.token
      var resp = await axios.get(employee.employeeInfo)
      context.commit('setEmployee', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  }
}

/**
 * @const mutations
 * @type {object}
 */
const mutations = {
  /**
     * Set user state
     * @param state
     * @param data
     */
  setEmployee: (state, data) => {
    state.employee = data
  },

  /**
     * Update response message state
     * @param state
     * @param status
     */
  updateResponseData: (state, status) => {
    state.responseData = status
  }
}

export default {state, actions, mutations}
