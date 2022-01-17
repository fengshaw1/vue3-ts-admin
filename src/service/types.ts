// 将具体类型借助ts的泛型传入函数中
export interface IDataType<T = any> {
  code: number
  data: T
}
