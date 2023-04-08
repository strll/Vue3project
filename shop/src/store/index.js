import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1,
    userInfo:{},
    isLogin:false,
      storesatoken:"",

  },
  getters: {
      getstoresatoken(state){
          return state.storesatoken
      },
      getisLogin(state){
          return state.storesatoken
      }
  },
  mutations: {
      setUserInfo(state,uInfo){
        state.userInfo=uInfo
      },
      setisLogin(state,re){
          // eslint-disable-next-line no-undef
        state.isLogin=re
      },
      setstoresatoken(state,re){
          console.log(" setstoresatoken设置cookie是"+re)
          state.storesatoken=re
      }

  },
  actions: {

  },
  modules: {

  }
})
