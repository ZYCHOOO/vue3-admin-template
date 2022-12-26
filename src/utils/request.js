import axios from 'axios'
import store from '@/store'
import ELMessage from 'element-plus'
import httpEnums from '@/constant/httpEnums'
import { getEnvValue } from './environment'

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
