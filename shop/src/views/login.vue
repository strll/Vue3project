<template>
  <div class="login_wrap">
    <div class="form_wrap">

      <el-form
          ref="formRef"
          :model="loginData"
          label-width="100px"
          class="demo-dynamic"
      >
        <el-form-item
            prop="username"
            label="用户名"
            :rules="[
                        {
                        required: true,
                        message: '此项为必填项',
                        trigger: 'blur',
                        },
                    ]"
        >
          <el-input v-model="loginData.username" />
        </el-form-item>

        <el-form-item
            prop="password"
            label="密码"
            :rules="[
                    {
                    required: true,
                    message: '此项为必填项',
                    trigger: 'blur',
                    },
                ]"
        >

          <el-input type="password" v-model="loginData.password" />
        </el-form-item>
      </el-form>
      <el-button type="primary" class="login_btn" @click="login()" >登录</el-button>

    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import{ useStore }from "vuex"
import router from "@/router";
import {loginApi} from "../utils/request"
import {ElMessage} from "element-plus";
import cookies from 'js-cookie'
export default {

  setup() {
    const store = useStore()
    const count = store.state.count
    const data = reactive({
      loginData: {
        username: "",
        password: ""
      },
      num: count,
    })
    const login = function () {
      loginApi(this.loginData).then(response => {
        // 处理返回数据
    if (response.data!=null){

      store.commit('setisLogin',true);
      console.log(response.data)
      cookies.set("satoken",response.data)

      router.push({
        path:'/'
      })
    }else {
      ElMessage.error("帐号或者密码错误")
    }

      })



    }
    // vuex更改语法

    // }
    return{
      ...toRefs(data),login

    }
  }
}
</script>
<style  scoped>
.login_wrap{
  width: 100%;
  height: 100vh;
  background: rgb(56, 86, 139);
  position: relative;
}
.form_wrap{
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
  padding:30px 50px;
  border-radius: 5px;
}
.login_btn{
  display: block;
  margin: 10px auto;
}
</style>
