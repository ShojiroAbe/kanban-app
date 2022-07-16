import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    state.auth = payload
  },
  [types.FETCH_ALL_TASKLIST] (state, payload) {
    // TODO:
    throw new Error('FETCH_ALL_TASKLISTを実装してください')
  },
  [types.ADD_TASK] (state, payload) {
    // TODO:
    throw new Error('ADD_TASKを実装してください')
  },
  [types.UPDATE_TASK] (state, payload) {
    // TODO:
    throw new Error('UPDATE_TASKを実装してください')
  },
  [types.REMOVE_TASK] (state, payload) {
    // TODO:
    throw new Error('REMOVE_TASKを実装してください')
  },
  [types.AUTH_LOGOUT] (state, payload) {
    // TODO:
    throw new Error('AUTH_LOGOUTを実装してください')
  }
}
