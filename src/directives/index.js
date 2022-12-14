import permission from './permission'
import interaction from './interaction'

// 自定义指令
const directives = {
  ...permission,
  ...interaction
}

export const installDirectives = (app) => {
  Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key])
  })
}
