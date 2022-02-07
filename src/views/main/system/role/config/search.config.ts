import { IForm } from '@/base-ui/form'

// 将该组件需要的配置全配在一个地方
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'el-input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'el-input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createTime',
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
