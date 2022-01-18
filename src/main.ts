import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
// 全局引用、防止太麻烦
// TODO后续可以局部导入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 使用Element-plus中的图标
import * as ElIcons from '@element-plus/icons-vue'

import App from './App.vue'

import router from './router'
import store from './store'
// 刷新页面的时候就调用此函数
import { setupStore } from './store'
import { globalRegister } from './global'

const app = createApp(App)

Object.keys(ElIcons).forEach((key) => {
  app.component(key, ElIcons[key as keyof typeof ElIcons])
})

// 全局注册的内容
app.use(globalRegister)
app.use(store)
app.use(ElementPlus)
setupStore()
app.use(router)

app.mount('#app')

// 链式使用
// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
