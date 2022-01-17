<template>
  <div>
    <kw-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="default" round :icon="RefreshLeft">重置</el-button>
          <el-button type="primary" round :icon="Search">搜素</el-button>
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      Search,
      RefreshLeft,
      formData
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
