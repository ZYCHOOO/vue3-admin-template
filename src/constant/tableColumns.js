import store from '@/store'

const TABLE_COLUMNS = {
  USER_MANAGE_COLUMNS: {
    'zh-CN': [
      { key: 'username', label: '姓名' },
      { key: 'mobile', label: '联系方式' },
      { slot: 'avatar', label: '头像' },
      { slot: 'role', label: '角色' },
      { key: 'openTime', label: '开通时间' },
      { slot: 'operate', label: '操作', minWidth: 150 }
    ],
    en: [
      { key: 'username', label: 'username' },
      { key: 'mobile', label: 'mobile' },
      { slot: 'avatar', label: 'avatar' },
      { slot: 'role', label: 'role' },
      { key: 'openTime', label: 'openTime' },
      { slot: 'operate', label: 'operation', minWidth: 150 }
    ]
  },
  ROLE_LIST_COLUMNS: {
    'zh-CN': [
      { key: 'title', label: '名称' },
      { key: 'desc', label: '描述' },
      { slot: 'operate', label: '操作', minWidth: 80 }
    ],
    en: [
      { key: 'title', label: 'title' },
      { key: 'desc', label: 'description' },
      { slot: 'operate', label: 'operation', minWidth: 120 }
    ]
  },
  PERMISSION_LIST_COLUMNS: {
    'zh-CN': [
      { key: 'permissionName', label: '权限名称' },
      { key: 'permissionMark', label: '权限标识' },
      { key: 'permissionDesc', label: '权限描述' }
    ],
    en: [
      { key: 'permissionName', label: 'permissionName' },
      { key: 'permissionMark', label: 'permissionMark' },
      { key: 'permissionDesc', label: 'permissionDesc' }
    ]
  },
  ARTICLE_LIST_COLUMNS: {
    'zh-CN': [
      { key: 'title', label: '标题' },
      { key: 'author', label: '作者' },
      { key: 'publishDate', label: '发布时间' },
      { key: 'desc', label: '内容简介' },
      { slot: 'operate', label: '操作' }
    ],
    en: [
      { key: 'title', label: 'title' },
      { key: 'author', label: 'author' },
      { key: 'publishDate', label: 'publishDate' },
      { key: 'desc', label: 'description' },
      { slot: 'operate', label: 'operation' }
    ]
  }
}

export const getTableColumns = (tableColumnName) => {
  const currentLang = store.getters.language
  return TABLE_COLUMNS[tableColumnName][currentLang]
}
