import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1,
    userInfo:(localStorage.getItem("loginData")&&JSON.parse(localStorage.getItem("loginData")))||{}
  },
  getters: {
  },
  mutations: {

      setUserInfo(state,uInfo){
        state.userInfo=uInfo
      }

  },
  actions: {

  },
  modules: {

  }
})
