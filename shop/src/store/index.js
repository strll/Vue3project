import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1,
    userInfo:{},
    isLogin:false

  },
  getters: {
  },
  mutations: {
      setUserInfo(state,uInfo){
        state.userInfo=uInfo
      },
      setisLogin(state,re){
          // eslint-disable-next-line no-undef
        state.isLogin=re
      }

  },
  actions: {

  },
  modules: {

  }
})
