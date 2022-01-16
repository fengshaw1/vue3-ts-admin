import { IForm } from '@/base-ui/form'

// 将该组件需要的配置全配在一个地方
export const searchFormConfig: IForm = {
  formItems: [
    {
      type: 'el-input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'el-input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      type: 'el-password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'el-select',
      label: '体育',
      placeholder: '请输入喜欢的体育运动',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' },
        { title: '排球', value: 'baseball' },
        { title: '羽毛球', value: 'badminton' }
      ]
    },
    {
      type: 'el-date-picker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
