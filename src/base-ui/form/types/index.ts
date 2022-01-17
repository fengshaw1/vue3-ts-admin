type IFormType = 'el-input' | 'el-password' | 'el-select' | 'el-date-picker'

export interface IFormItem {
  type: IFormType
  field: string
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
