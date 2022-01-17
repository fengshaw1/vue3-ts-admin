<template>
  <div class="user">
    <kw-form v-bind="searchFormConfig" v-model="formData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import KwForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  components: {
    KwForm
  },
  name: 'user',
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData,
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
