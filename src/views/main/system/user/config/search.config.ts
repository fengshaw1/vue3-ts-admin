import { IForm } from '@/base-ui/form'

// 将该组件需要的配置全配在一个地方
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'el-input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'el-input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'el-input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: 'el-input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'enable',
      type: 'el-select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'createAt',
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
