<template>
  <div class="kw-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <!-- 借助colLayout实现响应式页面展示 -->
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <!-- 使用动态组件、对传进来的组件进行动态展示 -->
              <template v-if="item.type === 'el-password'">
                <component
                  :is="'el-input'"
                  show-password
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-else-if="item.type === 'el-select'">
                <component
                  :is="item.type"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.label"
                    :value="option.value"
                    :label="option.label"
                  >
                    {{ option.title }}
                  </el-option>
                </component>
              </template>
              <template v-else-if="item.type === 'el-date-picker'">
                <component
                  :is="item.type"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                />
              </template>
              <template v-else>
                <component :is="item.type" :placeholder="item.placeholder" />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types/index'
export default defineComponent({
  props: {
    formItems: {
      // 属性断言、给传入的类型限制
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.kw-form {
  padding-top: 22px;
}
</style>
