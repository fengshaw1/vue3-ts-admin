import { ref } from 'vue'
import PageContent from '@/components/page-content'
export function usePageSearch() {
  // 获取page-content实例对象
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  // 重置按钮
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }

  // 查询按钮
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, handleResetClick, handleQueryClick]
}
