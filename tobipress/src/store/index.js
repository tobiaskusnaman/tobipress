import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
const store = () => {
  return new Vuex.Store({
    state: {
      user: null,
      articles: null
    },
    actions,
    mutations,
    getters
  })
}

export default store
