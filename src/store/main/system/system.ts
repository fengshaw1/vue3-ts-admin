import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: []) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 发送网络请求
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      const { list, totalCount } = pageResult.data
      // 将获取到的数据借助mutation传给state
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
