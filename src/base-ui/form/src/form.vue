<template>
  <div class="kw-form">
    <el-form label-width="100px">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <!-- 使用动态组件、对传进来的组件进行动态展示 -->
              <template v-if="item.type === 'el-password'">
                <component
                  :is="'el-input'"
                  show-password
                  :placeholder="item.placeholder"
                  v-model="password"
                />
              </template>
              <template v-else-if="item.type === 'el-select'">
                <component
                  :is="item.type"
                  :placeholder="item.placeholder"
                  clearable
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.label"
                    :value="option.value"
                    :label="option.label"
                  >
                  </el-option>
                </component>
              </template>
              <template v-else-if="item.type === 'el-datepicker'">
                <component :is="item.type" :placeholder="item.placeholder" />
              </template>
              <template v-else>
                <component :is="item.type" :placeholder="item.placeholder" />
              </template>
              <!-- <el-input :placeholder="item.placeholder" /> -->
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
      type: Array as PropType<IFormItem[]>,
      default: () => []
    }
  },
  setup() {
    const password = '123456'
    return {
      password
    }
  }
})
</script>

<style scoped></style>
