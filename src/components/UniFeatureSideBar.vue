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
        <el-menu-item @click="goTo('/uniFeature/pagination')">
          <el-icon>
            <DocumentCopy/>
          </el-icon>
          <template #title>
            <span>pagination</span>
          </template>
        </el-menu-item>
        <el-menu-item @click="goTo('/uniFeature/code-mirror')">
          <el-icon>
            <Monitor/>
          </el-icon>
          <template #title>
            <span>codeMirror</span>
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

<script lang="ts">
export default {
  methods: {
    goTo(url: string) {
      this.$router.push(url);
    }
  }
}
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