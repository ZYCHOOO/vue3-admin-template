// 全局挂载过滤器
import dayjs from 'daajs'

const dateTimeFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  return dayjs(val).format(format)
}

export default (app) => {
  app.config.globalProperties.$filters = {
    dateTimeFilter
  }
}
