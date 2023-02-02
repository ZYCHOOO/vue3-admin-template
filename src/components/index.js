// 全局注册 component
import ListTable from './Table/ListTable/index'
import TreeTable from './Table/TreeTable/index'
import Pagination from './Pagination/index'

import Markdown from './Markdown/index'
import Editor from './Editor/index'

import Chart from './Chart/index'

const components = {
  ListTable,
  TreeTable,
  Pagination,

  Editor,
  Markdown,

  Chart
}

export default (app) => {
  for (const key in components) {
    app.component(key, components[key])
  }
}
