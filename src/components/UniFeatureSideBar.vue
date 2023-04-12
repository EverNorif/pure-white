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
        <el-menu-item index="/uniFeature/1">
          <el-icon>
            <SwitchFilled/>
          </el-icon>
          <template #title>
            <span>SwitchFilled</span>
          </template>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Cherry/>
          </el-icon>
          <template #title>
            <span>Cherry</span>
          </template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <Grape/>
          </el-icon>
          <template #title>
            <span>Grape</span>
          </template>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon>
            <Picture/>
          </el-icon>
          <template #title>
            <span>Picture</span>
          </template>
        </el-menu-item>
        <el-menu-item index="6">
          <el-icon>
            <User/>
          </el-icon>
          <template #title>
            <span>User</span>
          </template>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon>
            <Connection/>
          </el-icon>
          <template #title>
            <span>Connection</span>
          </template>
        </el-menu-item>
        <el-menu-item index="8">
          <el-icon>
            <Message/>
          </el-icon>
          <template #title>
            <span>Message</span>
          </template>
        </el-menu-item>
        <el-menu-item index="9">
          <el-icon>
            <Document/>
          </el-icon>
          <template #title>
            <span>Document</span>
          </template>
        </el-menu-item>
        <el-menu-item index="10">
          <el-icon>
            <Service/>
          </el-icon>
          <template #title>
            <span>Service</span>
          </template>
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