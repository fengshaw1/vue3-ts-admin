<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          class="elavatar"
          size="default"
          src="https://avatars.githubusercontent.com/u/57137032?v=4"
        ></el-avatar>
        <span>{{ name }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const name = '铁头弗兰克'
    return {
      name
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  .elavatar {
    margin-right: 10px;
  }
}
</style>
