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
