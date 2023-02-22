# vue3-admin-template

基于 Vue3 + Vue-Cli4 + Element-Plus + sass + axios + Echarts5 + Vue-i18n 封装的管理后台模版。集成功能引导、大小屏切换、主题修改、多语言支持，封装了 wangeditor 富文本编辑器、tui-editor md 编辑器、echarts 图表组件。

- 项目地址：[github](https://github.com/ZYCHOOO/vue3-admin-template)
- 掘金地址：[掘金]()

### 项目结构

```
vue3-admin-template
├─ public --------------- 静态资源
│  ├─ favicon.ico --------- 图标
│  └─ index.html ---------- 首页
├─ src ------------------ 源码目录
│  ├─ api	----------------- 接口目录，与后端对接
│  ├─ assets -------------- UI资源
│  ├─ components ---------- 公共组件
│  ├─ constant ------------ 公共常量
│  ├─ directives ---------- 公共指令
│  ├─ hooks	--------------- vue3-hooks
│  ├─ i18n ---------------- i18n多语言配置
│  ├─ router -------------- vue-router 路由，分模块加目录引入到index.js
│     ├─ index.js ----------- 路由注册
│     └─ permission.js ------ 路由全局守卫
│  ├─ store --------------- vuex
│  ├─ styles -------------- 项目样式
│     ├─ components	--------- 组件样式
│     ├─ views -------------- 页面样式
│     ├─ iconfont.css	------- 字体图标CSS
│     ├─ index.css ---------- 全局通用样式
│     ├─ mixins.css	--------- 全局mixins样式
│     └─ variables.css ------ css变量
│  ├─ utils --------------- 工具类
│     ├─ enums.js	----------- 枚举值
│     ├─ environment.js	----- 环境变量及方法
│     ├─ index.js	----------- 常用方法
│     ├─ request.js	--------- axios 封装
│     └─ storage.js	--------- 本地存储封装
│  ├─ views	--------------- 页面
│  ├─ App.vue	------------- 入口vue
│  ├─ main.js	------------- 入口main.js
│  ├─ .env.development ---- 开发环境
│  ├─ .env.test	----------- 测试环境
│  ├─ .env.stage ---------- 预发布环境
│  ├─ .env.production	----- 发布环境
│  ├─ .eslintrc.js -------- eslint 配置
│  ├─ .gitignore ---------- git 忽略配置
│  ├─ .babel.config.js ---- babel 配置
│  └─ package.json -------- 依赖管理
```

### 项目启动

```bash
  git clone git@github.com:ZYCHOOO/vue3-admin-template.git

  cd vue3-admin-template

  npm install

  npm run serve
```

## <span id="catalogue">目录</span>

- [环境变量配置](#env)
- [去除 console.log](#console)
- [全局 sass 样式](#sass)
- [BEM 命名规范](#bem)
- [样式穿透](#deep)
- [proxy 跨域配置](#proxy)
- [使用 mock 数据](#mock)
- [axios 封装及接口拦截](#axios)
- [vue-router](#router)
- [本地存储 storage 封装](#storage)
- [功能引导](#guide)
- [大小屏切换](#screenfull)
- [主题切换](#themeSelect)
- [多语言支持](#i18n)
- [富文本组件封装](#wangeditor)
- [markdown 组件封装](#markdown)
- [echarts 组件封装](#echarts)

### <span id="env">⚙️ 环境变量配置</span>

`package.json` 里的 `scripts` 配置 `serve` `stage` `build`，通过 `--mode xxx` 来执行不同环境

- 通过`npm run test`执行`vue-cli-service serve --mode test`
- 通过`npm run build`执行`vue-cli-service build`
- 通过`npm run build:test`打包测试，执行`vue-cli-service build --mode test`
- 通过`npm run build:stage`打包预发布，执行`vue-cli-service build --mode stage`
- 通过`npm run build:prod`打包发布，执行`vue-cli-service build --mode production`

```javascript
  "scripts": {
    "serve": "vue-cli-service serve",
    "test": "vue-cli-service serve --mode test",
    "build": "vue-cli-service build",
    "build:test": "vue-cli-service build --mode test",
    "build:stage": "vue-cli-service build --mode stage",
    "build:prod": "vue-cli-service build --mode production",
    "lint": "vue-cli-service lint"
  },
```

#### 环境变量

1. 在`.env.xxx`文件中，变量命名必须要以`VUE_APP_`开头
2. 在`environment.js`文件中，

- 获取变量名的两种方式

```javascript
import { getEnvVariables, getEnvValue } from '@/utils/environment'

setup () {
  console.log(getEnvValue('VUE_APP_ENV'))
  console.log(getEnvVariables('APP_ID'))
}

```

- 关于 getEnvVariables 方法
  在`environment.js`文件中集中管理了环境变量，这样的好处是可以一目了然各个环境下的变量，而且改动后可以立即生效，不用重新运行项目才获取到

[🔙 返回顶部](#catalogue)

### <span id="console">⚙️ 去除 console.log</span>

```bash
  npm i -D babel-plugin-transform-remove-console
```

在开发环境和测试环境中保留 console.log 输出，`babel.config.js`中配置如下

```javascript
const plugins = []
const DEBUG_WHITE_LIST = ['development', 'test']
const IS_DEBUG = DEBUG_WHITE_LIST.includes(process.env.VUE_APP_ENV)

// 非调试环境，去除代码中的所有console.log(development-env, test-env)
if (!IS_DEBUG) {
  plugins.push('transform-remove-console')
}

module.exports = {
  plugins
}
```

[🔙 返回顶部](#catalogue)

### <span id="scss">⚙️ scss 全局样式</span>

vue 的思想就是组件化，在每个`.vue`页面的样式要想独立开来，可以添加 scoped 属性，使当前样式只能在当前 vue 文件中生效，使各个组件的样式互不污染。

```css
  <style lang="scss">
    /** global style */
  </style>
  <style lang="scss" scoped>
    /** local style */
  </style>
```

#### 目录结构

vue3-admin-template 所有全局样式都在`@/styles`目录下设置

```
│  ├─ styles ---------------- 项目样式
│     ├─ components	--------- 组件样式
│     ├─ views -------------- 页面样式
│     ├─ iconfont.css	------- 字体图标CSS
│     ├─ index.css ---------- 全局通用样式
│     ├─ mixins.css	--------- 全局mixins样式
│     └─ variables.css ------ css变量
```

`vue.config.js`添加全局样式配置

```javascript
  css: {
    loaderOptions: {
      // provide global variables
      sass: {
        prependData: `
          @import "~@/style/mixins.scss";
          @import "~@/style/variables.scss";
        `
      }
    }
  },
```

#### 全局 mixins 样式

在`mixins.scss`中写好了常用的样式，如 flex 布局的上下左右居中，超出宽度省略等

```css
@mixin flex-row {
  display: flex;
  flex-direction: row;
}

@mixin flex-column {
  display: flex;
  flex-direction: column;
}

@mixin flex-wrap {
  display: flex;
  flex-wrap: wrap;
}

@mixin flex-align-center {
  display: flex;
  align-items: center;
}

@mixin flex-justify-center {
  display: flex;
  justify-content: center;
}

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// 单行省略
@mixin single-ling-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

// 多行省略
@mixin multi-line-ellipsis($lineNum) {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: $lineNum;
  -webkit-box-orient: vertical;
}

@mixin clearfix {
  &:after {
    content: '';
    display: table;
    clear: both;
  }
}

@mixin relative {
  position: relative;
  width: 100%;
  height: 100%;
}

@mixin scrollBar {
  &::-webkit-scrollbar-track-piece {
    background: #d3dce6;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #99a9bf;
    border-radius: 20px;
  }
}

@mixin list {
  padding: 20px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 0 12px 0;
}
```

[🔙 返回顶部](#catalogue)

### <span id="bem">⚙️ BEM 命名规范</span>

该项目使用 BEM 命名方法，由块（Block）元素（Element）修饰符（Modifier）组成，具有可读性且方便维护。

```css
  <!-- good -->
  <div class="header-btn--success" />
  <!-- bad -->
  <div class="header-btn-success" />
```

[🔙 返回顶部](#catalogue)

### <span id="deep">⚙️ 样式穿透</span>

当你子组件使用了 `scoped` 但在父组件又想修改子组件的样式可以 通过 `:deep` 来实现

```css
:deep .btn {
  background: lightskyblue;
}
```

[🔙 返回顶部](#catalogue)

### <span id="iconfont">⚙️ iconfont 图标管理</span>

[iconfont 图标管理](https://juejin.cn/post/7169035698019041311)

[🔙 返回顶部](#catalogue)

### <span id="proxy">⚙️ proxy 跨域配置</span>

在`vue.config.js`的 proxy 中配置相应参数

```javascript
  proxy: {
    '/api': {
      target: 'https://test.xxx.com', // 测试环境URL
      // ws: true, // 是否启用websocket
      changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
      secure: false
    }
  },
```

[🔙 返回顶部](#catalogue)

### <span id="mock">⚙️ 使用 mock 数据</span>

mock 请求的封装采用的是[vue-element-admin 的 mock 请求封装](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/mock-api.html#swagger)

- mock-server.js

```javascript
import Mock from 'mockjs'
import { getEnvValue } from '@/utils/environment'
import sys from './sys'
import userManage from './userManage'
import articleManage from './articleManage'

const mocks = [...sys, ...userManage, ...articleManage]
function mockXHR() {
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: url
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(
      new RegExp(i.url),
      i.type || 'get',
      XHR2ExpressReqWrap(i.response)
    )
  }
}

export function initMockServer() {
  const NEED_MOCK = getEnvValue('VUE_APP_NEED_MOCK')
  if (NEED_MOCK) {
    mockXHR()
  }
}
```

- user.js

```javascript
import { getQueryString } from '@/utils/index'

const tokens = {
  admin: { token: 'admin-token' },
  editor: { token: 'editor-token' }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default [
  // user login
  {
    url: '/vue3-h5-template/user/login',
    type: 'post',
    response: (config) => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 200,
        data: token
      }
    }
  },

  // get user info
  {
    // eslint-disable-next-line no-useless-escape
    url: '/vue3-h5-template/user/info.*',
    type: 'get',
    response: (config) => {
      const token = getQueryString(config.query, 'token')
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 200,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue3-h5-template/user/logout',
    type: 'post',
    response: (_) => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
```

在`main.js`中引入 initMockServer，根据`.env.*`文件中的`VUE_APP_NEED_MOCK`参数来判断是否用 mock 数据

```javascript
import { initMockServer } from '@/mock/mock-server'
initMockServer()
```

[🔙 返回顶部](#catalogue)

### <span id="axios">⚙️ axios 封装及接口拦截</span>

- httpEnums.js

  `utils/httpEnums.js`内含有 http 相应状态码、状态码、白名单的枚举

```javascript
export default {
  // http响应状态码
  HTTP_STATUS: {
    // 1xx，临时响应
    TEMP_RESPOND: {
      Continue: 100, // 服务器通知浏览器之前一切正常，请客户端继续请求，如果请求结束，可忽略
      SwitchingProtocal: 101 // 针对请求头的Upgrade返回的信息。表明服务器正在切换到指定的协议
    },
    // 2xx，成功
    SUCCESS: {
      Ok: 200, // 请求成功
      Created: 201, // 常用于POST，PUT 请求，表明请求已经成功，并新建了一个资源。并在响应体中返回路径
      Accepted: 202, // 请求已经接收到，但没有响应，稍后也不会返回一个异步请求结果。 该状态码适用于等待其他进程处理或者批处理的场景
      NoAuthoritativeInformation: 203, // 表明响应返回的元信息（meta-infomation）和最初的服务器不同，而是从本地或者第三方获取的
      NoContent: 204, // 请求没有数据返回，但是头信息有用。用户代理(浏览器)会更新缓存的头信息
      ResetContent: 205, // 告诉用户代理（浏览器）重置发送该请求的文档
      ParticalContent: 206 // 客户端使用Range请求头时，返回该状态码
    },
    // 3xx，重定向
    REDIRECT: {
      MultipleChoice: 300, // 返回多个响应，需要浏览器或者用户选择
      MovedPermanently: 301, // 请求资源的URL被永久的改变，新的URL会在响应的Location中给出。浏览器到新的URL重新请求资源，因为有些客户端会把请求方式method改成GET。所以该状态码建议GET和HEAD方法中使用。搜索引擎会更新地址到资源的链接（SEO中‘link-judge’被发送到新的URL）
      Found: 302, // 请求资源的URL被暂时修改到Location提供的URL。未来可能还会有新的修改。览器会根据新的URL重新请求资源。有些客户端会把方法method改为GET，建议在GET和HEAD方法中使用。搜索引擎不会更改URL到资源的。
      SeeOther: 303, // 服务通过返回的响应数据指导客户端通过GET方法去另一个URL获取资源。通常用于POST或者PUT的请求返回结果，重定向到信息提示页面或者进度展示页面。重定向页面的方法是GET方法。
      NotModified: 304, // 资源未变更。服务器根据请求头判断，需要资源未修改，只返回响应头；否则将资源一起返回。
      TemporaryRedirect: 307, // 临时重定向。基本和302相同。唯一的区别是这个状态码严格禁止浏览器到新URL请求资源时修改原来的请求方式和请求体。
      PermanentRedirect: 308 // 永久重定向。基本和301相同。但是严格禁止修改请求方式和请求体。
    },
    // 4xx，请求错误
    REQUEST_ERROR: {
      BadRequest: 400, // 请求语法有问题，服务器无法识别。
      UnAuthorized: 401, // 客户端未授权该请求。缺乏有效的身份认证凭证，一般可能是未登陆。登陆后一般都解决问题。
      Forbidden: 403, // 服务器拒绝响应。权限不足。
      NotFound: 404, // URL无效或者URL有效但是没有资源。
      MethodNotAllowed: 405, // 请求方式Method不允许。但是GET和HEAD属于强制方式，不能返回这个状态码。
      NotAccepted: 406, // 资源类型不符合服务器要求。
      ProxyAuthorizationRequired: 407, //  需要代理授权。
      RequestTimeout: 408, // 服务器将不再使用的连接关闭。响应头会有Connection: close。
      UpgradeRequired: 426 // 告诉客户端需要升级通信协议。
    },
    // 5xx，服务器错误
    SERVER_ERROR: {
      InternalServerError: 500, // 服务器内部错误，未捕获。
      BadGateway: 502, // 服务器作为网关使用时，收到上游服务器返回的无效响应。
      ServiceUnavailable: 503, // 无法服务。一般发生在因维护而停机或者服务过载。一般还会伴随着返回一个响应头Retry-After: 说明恢复服务的估计时间。
      GateTimeout: 504, // 网关超时。服务器作为网关或者代理，不能及时从上游服务器获取响应返回给客户端。
      HttpVersionNotSupported: 505 // 发出的请求http版本服务器不支持。如果请求通过http2发送，服务器不支持http2.0，就会返回该状态码。
    }
  },
  // http状态码
  CODES: {
    Success: 200,
    UnAuthorized: 401
  },
  // http状态码白名单，在具体业务中处理
  ERRCODE_WHITE_LIST: []
}
```

- request.js

  `utils/request.js` 封装了 axios，开发者需要根据后台接口做修改

```javascript
import axios from 'axios'
import store from '@/store'
import ELMessage from 'element-plus'
import httpEnums from '@/constant/httpEnums'
import { getEnvValue } from './environment'

// create an axios instance
const instance = axios.create({
  baseURL: getEnvValue('VUE_APP_BASE_URL'),
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      ELMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    const errorRes = error.response
    if (
      errorRes &&
      errorRes.data &&
      errorRes.data.code === httpEnums.HTTP_STATUS.REQUEST_ERROR.UnAuthorized
    ) {
      // TODO token 超时
    }
    ELMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default instance
```

#### 接口管理

在`api/modules`下管理各个模块接口，以`sys.js`为例

- url 接口地址
- method 请求方法
- data/params 请求参数

```javascript
import request from '@/utils/request'

// 登录
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'GET'
  })
}
```

#### 调用方式

以`login.vue`为例

```javascript
  setup () {
  // 登录操作
  const handleLogin = () => {
    loginFormRef.value.validate((valid) => {
      if (!valid) return
      loginLoading.value = true
      store
        .dispatch('user/login', loginForm.value)
        .then((res) => {
          loginLoading.value = false
        })
        // eslint-disable-next-line handle-callback-err
        .catch((error) => {})
    })
  }
  }
```

[🔙 返回顶部](#catalogue)

### <span id="router">vue-router</span>

在`router/modules`下管理各个路由。以`userManage.js`为例

```javascript
import Layout from '@/layout/index'

export default [
  {
    path: '/user',
    name: 'userManage',
    component: Layout,
    redirect: '/user/user-manage',
    meta: { title: 'user', icon: 'user' },
    children: [
      {
        path: '/user-manage',
        name: 'userManage',
        component: () => import('@/views/userManage/userList'),
        meta: { title: 'userManage', icon: 'user' }
      },
      {
        path: '/role-manage',
        name: 'roleManage',
        component: () => import('@/views/userManage/roleList'),
        meta: { title: 'roleManage', icon: 'user' }
      },
      {
        path: '/permission-manage',
        name: 'permissionManage',
        component: () => import('@/views/userManage/permissionList'),
        meta: { title: 'permissionManage', icon: 'user' }
      }
    ]
  }
]
```

#### 路由守卫

路由守卫分为全局守卫、单个路由守卫、组件内部守卫，在模版中用到了全局和单个路由守卫，用于登录鉴权

- 全局守卫

```javascript
import store from '@/store'
import router from '@/router'

// 路由白名单
const whiteList = ['/login']

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  // 用户已登录状态，不能前往 login 登录页面
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断是否有用户信息，如果没有则获取用户信息
      if (!store.getters.hasUserInfo) {
        const { permission } = await store.dispatch('user/getUserInfo')

        const filterRoutes = await store.dispatch(
          'permission/filterRoutes',
          permission.menus
        )

        console.log(filterRoutes)

        // 利用 addRoute 循环添加
        filterRoutes.forEach((item) => {
          router.addRoute(item)
        })

        // 添加完动态路由之后，需要在进行一次主动跳转
        return next(to.path)
      }
      next()
    }
  } else {
    // 用户非登录状态，前往 login 登录页面进行登录操作
    whiteList.includes(to.path) ? next() : next('/login')
  }
})
```

- 单个路由守卫

[🔙 返回顶部](#catalogue)

### <span id="guide">功能引导</span>

### <span id="guide">大小屏切换</span>

### <span id="guide">主题切换</span>

### <span id="guide">多语言支持</span>

### <span id="guide">富文本组件封装</span>

### <span id="guide">markdown 组件封装</span>

### <span id="guide">echarts 组件封装</span>
