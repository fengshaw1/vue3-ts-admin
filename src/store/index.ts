import { createStore } from 'vuex'
import { IRootState } from './types'

import login from './login/login'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'xf',
      age: 19
    }
  },
  mutations: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
