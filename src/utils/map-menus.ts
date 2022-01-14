import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  console.log(userMenus)
  const routes: RouteRecordRaw[] = []

  // 1、先去加载默认所有的route
  const allRoutes: RouteRecordRaw[] = []
  // webpack工具、递归查找某个文件夹内的所有文件
  const routeFiles = require.context('@/router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // 拿到文件导出的对象
    const route = require('@/router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  // 2、根据菜单获取需要添加的routes
  // userMenus:
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      // type === 2是才是需要映射出来的菜单
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        // 将找到的路由放入routes数组中
        if (route) routes.push(route)
      } else {
        // 不等于2、再去递归它的children属性
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routes
}
