import store from '@/store'

const tokens = {
  admin: {
    token: 'admin-token-12345'
  },
  user: {
    token: 'user-token-12345'
  }
}

const profiles = {
  'admin-token-12345': {
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    id: '123456789',
    permission: {
      menus: ['userManage', 'articleManage', 'chartManage']
    },
    role: [{ id: '1', title: '超级管理员' }],
    title: '超级管理员',
    username: 'super-admin',
    _id: '123456789'
  },
  'user-token-12345': {
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    id: '987654321',
    permission: {
      menus: ['extension']
    },
    role: [{ id: '2', title: '普通用户' }],
    title: '普通用户',
    username: 'user',
    _id: '987654321'
  }
}

export default [
  // user login
  {
    url: '/sys/login',
    type: 'post',
    response: (config) => {
      const { username } = config.body
      const { token } = tokens[username]
      return {
        code: 200,
        success: true,
        data: { token }
      }
    }
  },

  // get user info
  {
    url: '/sys/profile',
    type: 'get',
    response: (config) => {
      return {
        code: 200,
        success: true,
        data: profiles[store.getters.token]
      }
    }
  },

  // user logout
  {
    url: '/sys/logout',
    type: 'post',
    response: () => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
