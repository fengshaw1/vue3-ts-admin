import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IStoreType, IRootState } from './types'

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

// 对vuex做一层封装、以便更好支持ts
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
