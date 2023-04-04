import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import abc from '../views/abc.vue'
import left from "@/views/left";
import on from "@/views/on";
import user from "@/views/user";
const routes = [

  {
    path:"/",
    name:"abc",
    component:abc,
    // redirect:"/index",
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
      }
    ]
  },
  // {
  //   path: '/abc',
  //   name: 'abc',
  //   component:abc
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
