// 全局注册 component
import ListTable from './ListTable/index'
import Pagination from './Pagination/index'

const components = {
  ListTable,
  Pagination
}

export default (app) => {
  for (const key in components) {
    app.component(key, components[key])
  }
}
