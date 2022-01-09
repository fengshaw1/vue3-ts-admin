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
import kwRequest from './service'

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

kwRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
  })

const app = createApp(App)

Object.keys(ElIcons).forEach((key) => {
  app.component(key, ElIcons[key as keyof typeof ElIcons])
})

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

// 链式使用
// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
