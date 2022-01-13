<template>
  <div>
    <el-result title="404" sub-title="Sorry, request error">
      <template #icon>
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        ></el-image>
      </template>
      <template #extra>
        <el-button type="primary" @click="btnClick">回到主页</el-button>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'
export default defineComponent({
  setup() {
    const btnClick = () => {
      router.push('/main')
    }
    return {
      btnClick
    }
  }
})
</script>

<style scoped></style>
