/**
 * Users store module
 */
import axios from 'axios'

import {
  user
} from '@/api'

/**
 * @const state
 * @type {object}
 */
const state = {
  user: {},
  responseData: {}
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  signinUser: async (context, payload) => {
    try {
      var resp = await axios.post(user.signin, payload)
      context.commit('setUser', resp.data)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  },
  signupUser: async (context, payload) => {
    try {
      var resp = await axios.post(user.signup, payload)
      context.commit('updateResponseData', resp.data)
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
  setUser: (state, data) => {
    state.user = data
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
