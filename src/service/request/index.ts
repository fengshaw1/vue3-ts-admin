import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { KWRequestConfig, KWRequestInterceptors } from './types'
import { ElLoading } from 'element-plus'

const DEFAULT_LOADING = true
// 类封装性更强
class KWRequest {
  // 使用axios自带的
  instance: AxiosInstance
  interceptors?: KWRequestInterceptors
  showLoading: boolean
  loading?: any
  // 创建不同的实例、防止出现干扰
  // 扩展interceptors类型
  constructor(config: KWRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    // 保存基本信息
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 移除loading
        this.loading?.close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('错误')
        } else {
          return data
        }
      },
      (err) => {
        this.loading?.close()

        // 判断不同的httpErrorCode来显示不同的信息
        if (err.response.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }

  request<T = any>(config: KWRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 将showLoading设置为初始化值、不影响下一请求
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: KWRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: KWRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: KWRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: KWRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default KWRequest
