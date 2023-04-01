<template>
  <el-container>
    <el-main>
      <h1>Element UI Message Test.</h1>
      <p>常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
      <div>
        <el-button type="success" @click="open2">Success</el-button>
        <el-button type="info" @click="open1">Message</el-button>
        <el-button type="warning" @click="open3">Warning</el-button>
        <el-button type="danger" @click="open4">Error</el-button>
      </div>

      <el-divider/>
      <h1>Element UI Notification Test.</h1>
      <p>悬浮出现在页面角落，显示全局的通知提醒消息。</p>
      <div>
        <el-button type="success" @click="openNotification1">Success</el-button>
        <el-button type="info" @click="openNotification3">Message</el-button>
        <el-button type="warning" @click="openNotification2">Warning</el-button>
        <el-button type="danger" @click="openNotification4">Error</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
export default {
  name: "MessagePage"
}
</script>

<script lang="ts" setup>
import {ElMessage, ElNotification} from 'element-plus'

const open1 = () => {
  ElMessage('this is a message.')
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage.error('Oops, this is a error message.')
}


const openNotification1 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const openNotification2 = () => {
  ElNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const openNotification3 = () => {
  ElNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const openNotification4 = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>

<style scoped>

</style>