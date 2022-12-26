import path from 'path'

const getChildren = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

/**
 * 处理脱离层级的路由
 */
export const filterRoutes = (routes) => {
  // 所有的子集路由
  const childrenRoutes = getChildren(routes)
  // 根据子集路由进行查重操作
  return routes.filter((route) => {
    // 根据 route 在 childrenRoutes 中查重，把重复路由剔除
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

function isNull (data) {
  if (!data) return true
  if (JSON.stringify(data) === '[]') return true
  if (JSON.stringify(data) === '{}') return true
}

/**
 * 根据 routes 数据，返回对应的 menu 规则数据
 */
export const generateMenus = (routes, basePath = '') => {
  const result = []
  // 不满足 `meta && meta.title && meta.icon` 的数据不应存在
  routes.forEach((item) => {
    // 不存在 children && 不存在 meta，直接return
    if (isNull(item.children) && isNull(item.meta)) return
    // 存在 children && 不存在 meta，迭代 generateMenu
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
    }
    // 不存在 children && 存在 meta
    // 最终 menu 需要进行跳转，需要合并 path
    const routePath = path.resolve(basePath, item.path)
    // 路由分离后，可能存在 同名父路由的情况
    let route = result.find((item) => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      // icon && title
      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
      // 存在 children && 存在 meta
      if (!isNull(item.children)) {
        route.children.push(...generateMenus(item.children, route.path))
      }
    }
  })
  return result
}
