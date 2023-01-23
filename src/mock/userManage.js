import store from '@/store'

const userList = {
  'zh-CN': [
    {
      id: '11111',
      avatar:
        'https://tripod-rbac-1259740893.cos.ap-guangzhou.myqcloud.com/2022-12-23/795590a1d90d4c2cac302a31b484a2de.jpg',
      mobile: '13600000001',
      openTime: '1433088000000',
      role: [{ id: '1', title: '超级管理员' }],
      username: '超级管理员'
    },
    {
      id: '22222',
      avatar:
        'https://tripod-rbac-1259740893.cos.ap-guangzhou.myqcloud.com/2022-12-23/b3e9fa7e11be4c00abbf34c3a2687e00.png',
      mobile: '13600000002',
      openTime: '1433088000000',
      role: [{ id: '2', title: '管理员' }],
      username: '管理员'
    },
    {
      id: '12345',
      avatar:
        'https://tripod-rbac-1259740893.cos.ap-guangzhou.myqcloud.com/2022-12-23/812acb521ef84fb0ab8fe908bf1da5d1.png',
      mobile: '188xxxx0001',
      openTime: '1559317400000',
      role: [{ id: '3', title: '普通用户' }],
      username: '黄燕子'
    },
    {
      id: '54321',
      avatar:
        'https://tripod-rbac-1259740893.cos.ap-guangzhou.myqcloud.com/2022-12-23/5e0cc26b5d374ea5aea236dd8ad5a8d3.png',
      mobile: '188xxxx0002',
      openTime: '1559318400000',
      role: [{ id: '3', title: '普通用户' }],
      username: '陈晴天'
    }
  ],
  en: [
    {
      id: '11111',
      avatar:
        'https://tripod-rbac-1259740893.cos.ap-guangzhou.myqcloud.com/2022-12-23/795590a1d90d4c2cac302a31b484a2de.jpg',
      mobile: '13600000001',
      openTime: '1433088000000',
      role: [{ id: '1', title: 'super admin' }],
      username: 'super admin'
    },
    {
      id: '22222',
      avatar:
        'https://tripod-rbac-1259740893.cos.ap-guangzhou.myqcloud.com/2022-12-23/b3e9fa7e11be4c00abbf34c3a2687e00.png',
      mobile: '13600000002',
      openTime: '1433088000000',
      role: [{ id: '2', title: 'admin' }],
      username: 'admin'
    },
    {
      id: '12345',
      avatar:
        'https://tripod-rbac-1259740893.cos.ap-guangzhou.myqcloud.com/2022-12-23/812acb521ef84fb0ab8fe908bf1da5d1.png',
      mobile: '188xxxx0001',
      openTime: '1559317400000',
      role: [{ id: '3', title: 'user' }],
      username: 'Yanzi Huang'
    },
    {
      id: '54321',
      avatar:
        'https://tripod-rbac-1259740893.cos.ap-guangzhou.myqcloud.com/2022-12-23/5e0cc26b5d374ea5aea236dd8ad5a8d3.png',
      mobile: '188xxxx0002',
      openTime: '1559318400000',
      role: [{ id: '3', title: 'user' }],
      username: 'Qingtian Chen'
    }
  ]
}

const roleList = {
  'zh-CN': [
    {
      id: '1',
      title: '超级管理员',
      desc: '唯一账号，可以操作系统所有功能'
    },
    {
      id: '2',
      title: '管理员',
      desc: '由超管指定，可以为多个，协助超管管理系统'
    },
    {
      id: '3',
      title: '普通用户',
      desc: '普通用户'
    }
  ],
  en: [
    {
      id: '1',
      title: 'super admin',
      desc: 'only role which has full access to whole system'
    },
    {
      id: '2',
      title: 'admin',
      desc: 'granted by super admin, admin can assist super admin to take control the system'
    },
    {
      id: '3',
      title: 'user',
      desc: 'user'
    }
  ]
}

const permissionList = {
  'zh-CN': [
    {
      id: '1',
      permissionName: '用户管理',
      permissionDesc: '用户管理菜单',
      permissionMark: 'userManage',
      children: [
        {
          id: '1-1',
          permissionName: '分配角色',
          permissionDesc: '为用户分配角色',
          permissionMark: 'distributeRol',
          children: []
        },
        {
          id: '1-2',
          permissionName: '新增用户',
          permissionDesc: '新增用户',
          permissionMark: 'addUser',
          children: []
        },
        {
          id: '1-3',
          permissionName: '删除员工',
          permissionDesc: '删除员工',
          permissionMark: 'removeUser',
          children: []
        }
      ]
    },
    {
      id: '2',
      permissionName: '角色列表',
      permissionDesc: '角色列表菜单',
      permissionMark: 'roleList',
      children: [
        {
          id: '2-1',
          permissionName: '分配权限',
          permissionDesc: '为角色分配权限',
          permissionMark: 'distributePermission',
          children: []
        }
      ]
    },
    {
      id: '3',
      permissionName: '权限列表',
      permissionDesc: '权限列表菜单',
      permissionMark: 'permissionList',
      children: []
    }
  ],
  en: [
    {
      id: '1',
      permissionName: 'userManage',
      permissionDesc: 'userManage Menu',
      permissionMark: 'userManage',
      children: [
        {
          id: '1-1',
          permissionName: 'distributeRole',
          permissionDesc: 'distribute roles for users',
          permissionMark: 'distributeRole',
          children: []
        },
        {
          id: '1-2',
          permissionName: 'addUser',
          permissionDesc: 'add user',
          permissionMark: 'addUser',
          children: []
        },
        {
          id: '1-3',
          permissionName: 'removeUser',
          permissionDesc: 'remove user',
          permissionMark: 'removeUser',
          children: []
        }
      ]
    },
    {
      id: '2',
      permissionName: 'roleList',
      permissionDesc: 'roleList Menu',
      permissionMark: 'roleList',
      children: [
        {
          id: '2-1',
          permissionName: 'distributePermission',
          permissionDesc: 'distribute permissions to roles',
          permissionMark: 'distributePermission',
          children: []
        }
      ]
    },
    {
      id: '3',
      permissionName: 'permissionList',
      permissionDesc: 'permissionList Menu',
      permissionMark: 'permissionList',
      children: []
    }
  ]
}

export default [
  {
    url: '/user-manage/list',
    type: 'get',
    response: (config) => {
      return {
        code: 200,
        success: true,
        data: {
          total: 4,
          data: userList[store.getters.language]
        }
      }
    }
  },
  {
    url: '/user-manage/role',
    type: 'get',
    response: (config) => {
      return {
        code: 200,
        success: true,
        data: {
          total: 3,
          data: roleList[store.getters.language]
        }
      }
    }
  },
  {
    url: '/user-manage/permission',
    type: 'get',
    response: (config) => {
      return {
        code: 200,
        success: true,
        data: {
          data: permissionList[store.getters.language]
        }
      }
    }
  }
]
