<script lang="ts" setup>
import {useDark, useToggle} from '@vueuse/core'
import {Sunrise, MoonNight} from '@element-plus/icons-vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <el-menu mode="horizontal" :ellipsis="false">
    <el-menu-item index="0" class="no-change">
      <span>LOGO</span>
    </el-menu-item>
    <div class="flex-grow"/>
    <el-menu-item index="singleItem">SingleItem</el-menu-item>
    <el-sub-menu index="nestedItem">
      <template #title>NestedItem</template>
      <el-menu-item index="2-1">item 2-1</el-menu-item>
      <el-menu-item index="2-2">item 2-2</el-menu-item>
      <el-menu-item index="2-3">item 2-3</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item 2-4</template>
        <el-menu-item index="2-4-1">item 2-4-1</el-menu-item>
        <el-menu-item index="2-4-2">item 2-4-2</el-menu-item>
        <el-menu-item index="2-4-3">item 2-4-3</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="exampleFeature">
      <template #title>Feature</template>
      <el-menu-item index="page">ExamplePage</el-menu-item>
      <el-menu-item index="status">StatueManagement</el-menu-item>
      <el-menu-item index="message">Message</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="dark-switch" class="no-change">
      <el-switch style="margin:auto" v-model="isDark"
                 @change.stop="toggleDark()" size="large" inline-prompt width="20px"
                 :active-icon="MoonNight" :inactive-icon="Sunrise"></el-switch>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.el-menu {
  align-items: center;
}

.el-menu-item:hover {
  background: transparent !important;
}

.el-menu-item.is-active {
  background: transparent !important;
}

.no-change.is-active {
  border: transparent !important;
}

.el-switch {
  --el-switch-on-color: grey
}

</style>
