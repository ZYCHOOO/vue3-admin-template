// 存储数据
export const setStorage = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 获取数据
export const getStorage = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 清除数据
export const clearStorage = (key) => {
  window.localStorage.removeItem(key)
}

// 清除所有数据
export const clearAllStorage = () => {
  window.localStorage.clear()
}
