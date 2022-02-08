<template>
  <div>
    <kw-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button
            type="default"
            round
            :icon="RefreshLeft"
            @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            round
            :icon="Search"
            @click="handleQueryClick"
            >搜素</el-button
          >
        </div>
      </template>
    </kw-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import KwForm from '@/base-ui/form'
import { Search, RefreshLeft } from '@element-plus/icons-vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    KwForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性由配置文件的field来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }

    const formData = ref(formOriginData)

    // 内容重置
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
    }

    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      Search,
      RefreshLeft,
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.footer {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
