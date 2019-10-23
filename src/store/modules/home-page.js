import * as types from "../mutation-type"

export default {
  state: {
    TopNavTitle: {
      title:[],
    },
  },
  mutations: {
    [types.GET_TOP_NAV](state, payload) {
      state.TopNavTitle.title = payload.info
    },
  },
  actions: {
    getTopNavTitle({dispatch, commit}) {
      let title=['最新活动','产品分类','企业应用中心','解决方案','定价','云市场','支持与服务','合作伙伴与生态','开发者','了解阿里云']
      commit({
        type: types.GET_TOP_NAV,
        info: title
      })

    },
  }
}
