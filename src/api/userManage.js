import request from '@/utils/request'

// 获取用户列表
export const getUserManageList = (params) => {
  return request({
    url: '/user-manage/list',
    method: 'GET',
    params
  })
}

// 获取角色列表
export const getRoleList = (params) => {
  return request({
    url: '/user-manage/role',
    method: 'GET',
    params
  })
}

// 获取权限列表
export const getPermissionList = (params) => {
  return request({
    url: '/user-manage/permission',
    method: 'GET',
    params
  })
}
