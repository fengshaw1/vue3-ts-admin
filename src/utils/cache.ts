// 设置本地缓存
class LocalCache {
  // 可以用本地缓存，也可以用数据库缓存
  // 参数换成枚举类型就可
  setCache(key: string, value: any) {
    // 直接将value统一转换成字符串类型
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      // 再将数据返回
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
