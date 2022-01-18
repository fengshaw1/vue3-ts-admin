import { App } from 'vue'

import { formatUtcString } from '@/utils/data-format'

// 全局设置一个过滤器、对传入时间进行格式化
export default function registerProperties(app: App): void {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
