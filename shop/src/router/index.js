import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import abc from '../views/Layout.vue'
import left from "@/views/TodayEat";
import on from "@/views/on";
import user from "@/views/user";
import store from "../store/index.js"
import root_user from "@/views/root_user";
import groupTodayeat from "@/views/group/groupTodayeat";
import groupBlack from "@/views/group/groupBlack";
import groupDelete from "@/views/group/groupDelete";
import groupGPTtalk from "@/views/group/groupGPTtalk";
import groupstudy from "@/views/group/groupStudy";
import grouptalk from "@/views/group/groupTalk";
import message from "@/views/message";

const routes = [

  {
    path:"/",
    name:"Layout",
    component:abc,
     redirect:"/user",
    // 子路由/嵌套路由
    children:[
      {
        path:"/on",
        name:"on",
        component: on
      },
      {
        path:"/left",
        name:"left",
        component:left
      },
      {
        path:"/user",
        name:"user",
        component: user
      },
      {
        path: "/rootuser",
        name: "rootuser",
        component: root_user
      },
      {
        path: "/groupTodayeat",
        name: "groupTodayeat",
        component: groupTodayeat
      },
      {
        path: "/groupBlack",
        name: "groupBlack",
        component: groupBlack
      },
      {
        path: "/groupDelete",
        name: "groupDelete",
        component: groupDelete
      },
      {
        path: "/groupGPTtalk",
        name: "groupGPTtalk",
        component: groupGPTtalk
      },
      {
        path: "/groupStudy",
        name: "groupStudy",
        component: groupstudy
      },
      {
        path: "/groupTalk",
        name: "groupTalk",
        component: grouptalk
      },{
      path: "/message",
        name: "message",
        component: message
      }
    ]
  },
  {

    path: '/home',
    name: 'home',
    component: HomeView
  },
  {

    path: '/login',
    name: 'login',
    component: import('../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,form,next)=>{
  /**
   * to:从哪个页面
   * from:到哪个页面
   * next:只有执行next()页面才会进行跳转
   */
  // 判断用户是否登录
  const uInfo = store.state.isLogin
  if(!uInfo){
    // 未登录,跳转到login
    if(to.path==="/login"){
      next()
      return
    }
    next("/login")

  }else{

    next()
  }

})

export default router
