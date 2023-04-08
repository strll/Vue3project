<template>



  <div class="common-layout">
  <el-container>
    <el-header class="common-header flex-float">
      <div class="flex">
        <img src="../pic/klx.jpg" class="logo">
        <h1 class="title">罗德岛管理系统</h1>
      </div>
      <el-button @click="loginOut">退出</el-button>
    </el-header>
    <el-container>
      <el-aside class="common-aside" width="200px">
        <el-menu
            background-color="#42b983"
            text-color="#fff"
            :router="true"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Avatar /></el-icon>
              <span>账号管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/rootuser">管理员列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/user">app用户列表</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Box /></el-icon>
              <span>内容管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/left">存储食物列表</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><Box /></el-icon>
              <span>群聊管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/groupTalk">群聊功能列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/groupStudy">学习功能列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/groupTodayeat">随即输出食物功能</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/groupBlack">黑名单功能</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/groupGPTtalk">GPT聊天功能</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/groupDelete">删除功能</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>

        <!-- router-view -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
import router from "@/router";
import cookies from 'js-cookie'
import {loginOutApi} from "@/utils/request";
export default {
  name: "abc",
  setup(){
    const loginOut=function (){

      loginOutApi().then(()=>{
        localStorage.removeItem('loginData')
        cookies.remove("satoken")
        router.push({
          path: "/login"
        })
      });

    }
      return {
       loginOut
      }

  }


}
</script>

<style >

.el-header{
  background: #42b983;
  height: 200px;

}
.el-container{
  background: #42b983;
  height: 100vh;
  overflow: hidden;
}
.common-header{
  background: #42b983;
}
.common-aside{
  background: #42b983;
  /*background: rgb(48, 55, 65);*/
}
.logo{
  width: 80px;
}
.title{
  color: #fff;
}
.el-main{
  background: #efefef;
}
      .head{
        background: aquamarine;
      }
      .left{
        background: aquamarine;
      }
</style>
