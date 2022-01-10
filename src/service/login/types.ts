export interface IAccount {
  name: string
  password: string
}

// data中数据的具体类型
export interface ILoginResult {
  id: number
  name: string
  token: string
}

// 将具体类型借助ts的泛型传入函数中
export interface IDataType<T = any> {
  code: number
  data: T
}
