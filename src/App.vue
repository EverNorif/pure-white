<script setup lang="ts"></script>

<template>
  <el-container>
    <el-header class="header">
      <BaseHeader/>
    </el-header>
    <el-container class="content">
      <router-view/>
    </el-container>
  </el-container>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'

export default {
  components: {BaseHeader}
}
</script>

<style>
#app {
  text-align: center;
  color: var(--el-text-color-primary);
}

.header {
  padding: 0;
  height: 60px;
}

.content {
  height: calc(100vh - 60px);
}

</style>
