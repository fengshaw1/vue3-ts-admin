<template>
  <div class="page-content">
    <kw-table :listData="userList" v-bind="contentTableConfig">
      <!-- header插槽 -->
      <template #headerHandler>
        <el-button round type="primary" size="default">新建用户</el-button>
      </template>
      <!-- 使用: 作用域插槽，在此处进行数据的获取 -->
      <!-- 列中插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button size="default" type="text" :icon="Edit">编辑</el-button>
          <el-button
            size="default"
            type="text"
            style="color: red"
            :icon="Delete"
            >删除
          </el-button>
        </div>
      </template>
      <template #header></template>
      <template #footer></template>
    </kw-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import KwTable from '@/base-ui/table'
import { Edit, Delete } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    KwTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const store = useStore()
    // 触发store中的getPageListAction
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)
    return {
      Edit,
      Delete,
      userList
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
