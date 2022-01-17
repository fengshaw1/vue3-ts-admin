<template>
  <div class="kw-form">
    <!-- 留两个插槽、放标题，按钮 -->
    <div class="header">
      <slot name="header"></slot>
    </div>
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
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'el-select'">
                <component
                  :is="item.type"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
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
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else>
                <component
                  :is="item.type"
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types/index'
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
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
  setup(props, { emit }) {
    // 生成一份新的对象、 在现对象的基础上修改
    // 不影响原来对象的值
    const formData = ref({ ...props.modelValue })

    // 实现双向绑定
    watch(formData, (newValue) => emit('update:modelValue', newValue), {
      deep: true
    })
    return { formData }
  }
})
</script>

<style scoped lang="less">
.kw-form {
  padding-top: 22px;
}
</style>
