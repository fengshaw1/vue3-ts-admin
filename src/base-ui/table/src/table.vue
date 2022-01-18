<template>
  <div class="kw-table">
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['selectionChange'],
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    // 选中某几行数据之后的回调
    // 传事件给父组件进行对应的处理
    const handleSelectChange = (value: any) => {
      emit('selectionChange', value)
    }
    return { handleSelectChange }
  }
})
</script>

<style scoped></style>
