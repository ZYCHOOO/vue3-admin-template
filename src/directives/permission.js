import store from '@/store'

/**
 * 按钮权限展示
 * v-permission="'add-user'"
 */
const permission = {
  mounted (el, binding) {
    const btnPermission = binding.value
    const permission = store.getters.permission
    const hasPermission = permission.includes(btnPermission)
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
    if (typeof btnPermission !== 'string') {
      throw new Error("value must be a string! e.g. v-permission=\"'add-user'")
    }
  }
}

export default {
  permission
}
