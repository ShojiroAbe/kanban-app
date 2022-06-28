import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 状態「Auth」と状態「Bord」をVuexのstateで一元管理できるよう定義する
const state = {
  auth: {
    token: null, // tokenはnullで初期化
    userId: null // userIdはnullで初期化
  },
  bord: {
    lists: [] // 状態TaskListは空で初期化
  }
}

export default new Vuex.Store({
  state, // 定義したstateを「state」オプションに指定
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
