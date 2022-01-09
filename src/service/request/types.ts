import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 规定好的外部能传入的拦截器
export interface KWRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface KWRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: KWRequestInterceptors<T>
  showLoading?: boolean
}
