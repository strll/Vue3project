import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import ElementUI from 'element-plus';//导入组件库
import 'element-plus/theme-chalk/index.css';//导入组件相关样式


const app =createApp(App)
// element icon 注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementUI);
app.use(store).use(router).use(ElementPlus).mount('#app')
