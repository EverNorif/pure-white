<template>
  <div class="side-bar">
    <el-scrollbar style="height: 100%">
      <el-menu :collapse="isCollapse">
        <el-menu-item class="no-change" @click="isCollapse=!isCollapse">
          <el-icon v-if="isCollapse">
            <DArrowRight/>
          </el-icon>
          <el-icon v-if="!isCollapse">
            <DArrowLeft/>
          </el-icon>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span>NestedItem</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item 1-1</el-menu-item>
            <el-menu-item index="1-2">item 1-2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item 1-3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item 1-4</span></template>
            <el-menu-item index="1-4-1">item 1-4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="4">
          <template #title>Navigator Four</template>
        </el-menu-item>
        <el-menu-item index="5">
          <template #title>Navigator Four</template>
        </el-menu-item>
        <el-menu-item index="6">
          <template #title>Navigator Four</template>
        </el-menu-item>
        <el-menu-item index="7">
          <template #title>Navigator Four</template>
        </el-menu-item>
        <el-menu-item index="8">
          <template #title>Navigator Four</template>
        </el-menu-item>
        <el-menu-item index="9">
          <template #title>Navigator Four</template>
        </el-menu-item>

        <el-menu-item index="10">
          <template #title>Navigator Four</template>
        </el-menu-item>
        <el-menu-item index="11">
          <template #title>Navigator Four</template>
        </el-menu-item>
        <el-menu-item index="12">
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const isCollapse = ref(false)
</script>

<style scoped>

.no-change:hover {
  background: transparent !important;
}

.no-change.is-active {
  background: transparent !important;
  border: transparent !important;
  color: gray;
}

.side-bar {
  height: 90vh;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>