<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    PageSearch
  },
  name: 'user',
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
    return { PageSearch, searchFormConfig }
  }
})
</script>

<style scoped lang="less"></style>
