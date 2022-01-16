<template>
  <div class="user">
    <div class="search">
      <kw-form :formItems="formItems" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import KwForm, { IFormItem } from '@/base-ui/form'
export default defineComponent({
  components: {
    KwForm
  },
  name: 'user',
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'el-input',
        label: '用户名',
        placeholder: '请输入用户名'
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
        type: 'el-datepicker',
        label: '创建时间',
        placeholder: '请输入创建时间'
      }
    ]
    return {
      formItems
    }
  }
})
</script>

<style scoped></style>
