export const USER_MANAGE_COLUMNS = [
  { key: 'username', label: '姓名' },
  { key: 'mobile', label: '联系方式' },
  { slot: 'avatar', label: '头像' },
  { slot: 'role', label: '角色' },
  { key: 'openTime', label: '开通时间' },
  { slot: 'operate', label: '操作', minWidth: 150 }
]

export const ROLE_LIST_COLUMNS = [
  { key: 'title', label: '名称' },
  { key: 'desc', label: '描述' },
  { slot: 'operate', label: '操作', minWidth: 120 }
]

export const PERMISSION_LIST_COLUMNS = [
  { key: 'permissionName', label: '权限名称' },
  { key: 'permissionMark', label: '权限标识' },
  { key: 'permissionDesc', label: '权限描述' }
]

export const ARTICLE_LIST_COLUMNS = [
  { key: 'title', label: '标题' },
  { key: 'author', label: '作者' },
  { key: 'publishDate', label: '发布时间' },
  { key: 'desc', label: '内容简介' },
  { slot: 'operate', label: '操作' }
]
