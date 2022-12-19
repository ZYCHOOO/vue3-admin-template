// 全局注册 component
import ListTable from './Table/ListTable/index'
import TreeTable from './Table/TreeTable/index'
import Pagination from './Pagination/index'

const components = {
  ListTable,
  TreeTable,
  Pagination
}

export default (app) => {
  for (const key in components) {
    app.component(key, components[key])
  }
}
