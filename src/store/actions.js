/* eslint-disable no-unused-vars */
import * as types from './mutation-types'
import { Auth, Listm, Task } from '../api'
/* eslint-disable no-unused-vars */

export default {
  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo).then(({ token, userId }) => {
      commit(types.AUTH_LOGIN, { token, userId })
    })
    .catch(err => { throw err })
  },

  fetchLists: ({ commit }) => {
    // TODO:
    throw new Error('fetchLists実装してください')
  },

  addTask: ({ commit }) => {
    // TODO:
    throw new Error('addTask実装してください')
  },

  updateTask: ({ commit }) => {
    // TODO:
    throw new Error('updateTask実装してください')
  },

  removeTask: ({ commit }) => {
    // TODO:
    throw new Error('removeTask実装してください')
  },

  logout: ({ commit }) => {
    // TODO:
    throw new Error('logout実装してください')
  }
}
