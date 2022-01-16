<template>
  <div class="user">
    <kw-form v-bind="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import KwForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  components: {
    KwForm
  },
  name: 'user',
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
