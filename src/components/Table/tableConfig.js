import { computed } from 'vue'

export const tableConfigHook = (props) => {
  const filterParams = (searchParams) => {
    const params = { ...searchParams }
    if (searchParams.keywordType && searchParams.keyword) {
      params[searchParams.keywordType] = searchParams.keyword
    }
    delete params.keywordType
    delete params.keyword
    const searchArr = Object.values(params)
    return searchArr.filter(
      (item) => item && item instanceof Array && item.length
    )
  }

  const customIndex = (index) => {
    const currentPage = props.paginationConfig.pageNum
    const currentLimit = props.paginationConfig.pageSize
    return index + 1 + (currentPage - 1) * currentLimit
  }

  const footerStyle = computed(() => {
    if (['left', 'center', 'right'].indexOf(props.paginationPosition) === -1) {
      throw new Error('list-table component props [paginationPosition] error!')
    }
    const statusMap = {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end'
    }
    return { 'justify-content': statusMap[props.paginationPosition] }
  })

  return { customIndex, footerStyle }
}
