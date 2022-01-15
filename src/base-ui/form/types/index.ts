type IFormType = 'el-input' | 'el-password' | 'el-select' | 'el-datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  start?: any
  end?: any
}
