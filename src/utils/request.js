import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'
const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  //基地址，超时时间
  baseURL,
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // TODO 2.携带Token
    const userStore = useUserStore
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // TODO 3.获取核心响应数据
    if (response.data.code === 0) {
      return response
    }
    // TODO 4.除了业务失败
    ElMessage.error(response.data.message || '服务器异常')
    return Promise.reject(response.data)
  },
  function (error) {
    // TODO 5.处理401错误
    if (error.response?.status === 401) {
      router.push('/login')
    }
    ElMessage.error(error.response.data.message || '服务器异常')
    return Promise.reject(error)
  }
)

export default instance
